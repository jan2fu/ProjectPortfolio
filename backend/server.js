import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

// Initialize the app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/analytics")
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
    const monthlyVisitors = await MonthlyVisitors.findOne().sort({ timestamp: -1 }); // Get the latest

    res.json({
      visitorActivity,
      visitorLocations,
      monthlyVisitors: monthlyVisitors ? monthlyVisitors.count : 0,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch analytics data", details: err.message });
  }
});

// Record user clicks
app.post("/api/analytics/clicks", async (req, res) => {
  try {
    const { element } = req.body;
    const click = new Click({ element });
    await click.save();
    res.status(201).json({ message: "Click recorded" });
  } catch (err) {
    res.status(500).json({ error: "Failed to record click", details: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});