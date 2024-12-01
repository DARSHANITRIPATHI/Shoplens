import mongoose from "mongoose";

// Define the Review Schema
const reviewSchema = new mongoose.Schema({
  user: { type: String, required: true }, // Name of the reviewer
  comment: { type: String, required: true }, // Feedback text
  rating: { type: Number, required: true, min: 1, max: 5 }, // Rating (1-5)
});

// Define the Product Schema
const productSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  category: { type: String },
  ratings: { type: Number, default: 0 }, // Average rating, default is 0
  reviews: [reviewSchema], // Array of reviews
});

const Product = mongoose.model("Product", productSchema);

export default Product;
