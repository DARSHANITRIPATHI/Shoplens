import Product from "../models/Product.js";

// Controller to fetch all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ productId: req.params.id });
    if (product) {
      res.json(product); // Return the product data if found
    } else {
      res.status(404).json({ message: "Product not found" }); // Handle if not found
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching product" });
  }
};

// Controller to fetch a single product by ID
// export const getProductById = async (req, res) => {
//   try {
//     const product = await Product.findOne({ productId: req.params.id });
//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404).json({ message: "Product not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching product" });
//   }
// };
