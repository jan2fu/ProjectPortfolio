import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
dotenv.config(); // Load environment variables

// Initialize the app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json()); // Parse JSON bodies
app.use(helmet()); // Security middleware

// Connect to MongoDB
const PORT = process.env.PORT || 5000;  // Use PORT from .env or default to 5000
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/analytics") // Use MONGO_URI from .env
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define schemas
const visitorActivitySchema = new mongoose.Schema({
  name: String, // e.g., "Jan", "Feb"
  visitors: Number,
});

const visitorLocationSchema = new mongoose.Schema({
  country: String,
  count: Number, // Percentage or count
});

const monthlyVisitorsSchema = new mongoose.Schema({
  count: Number,
  timestamp: { type: Date, default: Date.now },
});

const clickSchema = new mongoose.Schema({
  element: String,
  elementId: String, // ID of the clicked element
  elementClass: String, // Class name of the clicked element
  pageUrl: String, // URL of the page where the click occurred
  timestamp: { type: Date, default: Date.now },
});

// Create and export models
export const VisitorActivity = mongoose.model("VisitorActivity", visitorActivitySchema);
export const VisitorLocation = mongoose.model("VisitorLocation", visitorLocationSchema);
export const MonthlyVisitors = mongoose.model("MonthlyVisitors", monthlyVisitorsSchema);
export const Click = mongoose.model("Click", clickSchema);

// API Endpoints

// Get analytics data
app.get("/api/analytics", async (req, res) => {
  try {
    const visitorActivity = await VisitorActivity.find();
    const visitorLocations = await VisitorLocation.find();
    const monthlyVisitors = await MonthlyVisitors.findOne().sort({ timestamp: -1 });

    const clicks = await Click.find().limit(100); // Limit to 100 records

    res.json({
      visitorActivity,
      visitorLocations,
      monthlyVisitors: monthlyVisitors ? monthlyVisitors.count : 0,
      clicks,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch analytics data", details: err.message });
  }
});

app.post("/api/analytics/clicks", async (req, res) => {
  const { element, elementId, elementClass, pageUrl } = req.body;

  if (!element || !pageUrl) {
    return res.status(400).json({ error: "Element and pageUrl are required" });
  }

  try {
    const click = new Click({ element, elementId, elementClass, pageUrl });
    await click.save();
    res.status(201).json({ message: "Click recorded" });
  } catch (err) {
    console.error("Error recording click:", err);
    res.status(500).json({ error: "Failed to record click", details: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});