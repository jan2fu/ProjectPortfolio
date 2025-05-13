import mongoose from "mongoose";
import { VisitorActivity, VisitorLocation, MonthlyVisitors } from "./server.js"; // Adjust import paths if needed

mongoose
  .connect("mongodb://127.0.0.1:27017/analytics")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const seedData = async () => {
  await VisitorActivity.insertMany([
    { name: "Jan", visitors: 400 },
    { name: "Feb", visitors: 300 },
    { name: "Mar", visitors: 500 },
  ]);

  await VisitorLocation.insertMany([
    { country: "USA", count: 45 },
    { country: "UK", count: 20 },
    { country: "Canada", count: 15 },
  ]);

  await MonthlyVisitors.create({ count: 1200 });

  console.log("Database seeded!");
  mongoose.connection.close();
};

seedData();