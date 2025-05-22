import express from "express"; // Web framework for Node.js
import mongoose from "mongoose"; // MongoDB ODM
import cors from "cors"; // Middleware to enable CORS
import bodyParser from "body-parser"; // Middleware to parse JSON bodies
import helmet from "helmet"; // Security middleware
import rateLimit from "express-rate-limit"; // Middleware to limit repeated requests
import mongoSanitize from "express-mongo-sanitize"; // Middleware to prevent NoSQL injection
import dotenv from "dotenv"; // Load environment variables from .env file
import path from "path"; // Path module to handle file paths
import { fileURLToPath } from "url"; // Utility to get the current file path

// ...dotenv config...
dotenv.config();

const app = express();

// Rate limiting: limit each IP to 100 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later."
});
app.use(limiter);

// Sanitize data to prevent NoSQL injection
app.use(mongoSanitize());

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
app.use(bodyParser.json()); // Parse JSON bodies
app.use(helmet()); // Security middleware

// Connect to MongoDB
const PORT = process.env.PORT || 5000;  // Use PORT from .env or default to 5000
// console.log("MONGO_URI:", process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI) // Use MONGO_URI from .env
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
const VisitorActivity = mongoose.model("VisitorActivity", visitorActivitySchema);
const VisitorLocation = mongoose.model("VisitorLocation", visitorLocationSchema);
const MonthlyVisitors = mongoose.model("MonthlyVisitors", monthlyVisitorsSchema);
const Click = mongoose.model("Click", clickSchema);

// For ES modules, get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "dist"))); 

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

// For any route not handled by your API, serve index.html
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// app._router.stack
//   .filter(r => r.route)
//   .forEach(r => console.log(r.route.path));
  
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});