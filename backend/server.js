import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";
import  populateDatabase  from "./populateDB.js"; // Ensure the relative path is correct
import cors from "cors";

const app = express();
app.use(cors());
// Middleware for parsing JSON
app.use(express.json());

// Database connection
mongoose
  .connect("mongodb://localhost:27017/shoplens", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    // Populate database on server start
    const populateOnStart = true;
    if (populateOnStart) {
      await populateDatabase();
    }
  })
  .catch((err) => console.log("DB Connection Error:", err));

// API routes
app.use("/api/products", productRoutes);

// Default route for testing server
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
