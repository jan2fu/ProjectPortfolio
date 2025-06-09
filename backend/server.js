const express = require("express");
const AWS = require("aws-sdk");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");

// Create Express app
const app = express();
app.use(express.json());

const allowedOrigins = [
  'https://www.hirejamal.com',
  'https://hirejamal.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

// Add this right after CORS setup
app.options('/analytics/clicks', cors()); // Enable preflight

fetch('https://vtz93y8g4j.execute-api.us-east-1.amazonaws.com/dev/analytics/clicks', {
  method: 'POST', // Or 'GET'
  mode: 'cors', // Include this
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data), // For POST requests
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Initialize DynamoDB client
const dynamodb = new AWS.DynamoDB.DocumentClient();

// Define environment variable for table name (ensure it's set in serverless.yml)
const TABLE_NAME = process.env.CLICKS_TABLE;

// POST route to log clicks
app.post("/analytics/clicks", async (req, res) => {
  const { element, pageUrl, elementId = null, elementClass = null } = req.body;

  if (!element || !pageUrl) {
    return res.status(400).json({ error: "Element and pageUrl are required" });
  }

  const item = {
    id: elementId || `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
    timestamp: new Date().toISOString(),
    element,
    pageUrl,
    elementClass,
  };

  const params = {
    TableName: TABLE_NAME,
    Item: item,
  };

  try {
    await dynamodb.put(params).promise();
    res.status(201).json({ message: "Click recorded" });
  } catch (err) {
    console.error("Error writing to DynamoDB:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET route to retrieve all clicks
app.get('/', (req, res) => {
  res.send('API is running');
});

// Health check
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

// Export the app wrapped in serverless
module.exports.handler = serverless(app);
