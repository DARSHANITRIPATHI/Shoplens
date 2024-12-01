import express from "express";
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();

// Route to fetch all products
router.get("/", getProducts);
// router.get("/:id", getProductById);
// Route to fetch a product by ID
router.get("/:id", getProductById);

export default router;
