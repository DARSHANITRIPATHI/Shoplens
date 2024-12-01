// import mongoose from "mongoose";
// import Product from "./models/Product.js"; // Ensure the path to your Product model is correct

// // MongoDB connection
// mongoose
//   .connect("mongodb://localhost:27017/shoplens", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");

//     // Sample product data
//     const products = [
//       {
//         productId: "P001",
//         name: "Wireless Headphones",
//         price: 99.99,
//         description:
//           "High-quality wireless headphones with noise cancellation.",
//         image: "https://via.placeholder.com/150",
//         category: "Electronics",
//       },
//       {
//         productId: "P002",
//         name: "Smartphone",
//         price: 699.99,
//         description: "Feature-packed smartphone with a stunning display.",
//         image: "https://via.placeholder.com/150",
//         category: "Electronics",
//       },
     
//       {
//     productId: "P003",
//     name: "Smart Watch",
//     price: 199.99,
//     description: "Smart watch with fitness tracking and notifications.",
//     image: "https://via.placeholder.com/150",
//     category: "Wearables",
//   },
//   {
//     productId: "P004",
//     name: "Laptop",
//     price: 899.99,
//     description: "High-performance laptop for work and entertainment.",
//     image: "https://via.placeholder.com/150",
//     category: "Computers",
//   },
//   {
//     productId: "P005",
//     name: "Bluetooth Speaker",
//     price: 49.99,
//     description: "Portable Bluetooth speaker with powerful sound.",
//     image: "https://via.placeholder.com/150",
//     category: "Audio",
//   },
//   {
//     productId: "P006",
//     name: "Gaming Console",
//     price: 499.99,
//     description: "Next-generation gaming console with immersive graphics.",
//     image: "https://via.placeholder.com/150",
//     category: "Gaming",
//   },
//   {
//     productId: "P007",
//     name: "Tablet",
//     price: 299.99,
//     description: "Lightweight tablet with a stunning display and long battery life.",
//     image: "https://via.placeholder.com/150",
//     category: "Computers",
//   },
//   {
//     productId: "P008",
//     name: "Fitness Tracker",
//     price: 79.99,
//     description: "Track your fitness goals with this sleek fitness tracker.",
//     image: "https://via.placeholder.com/150",
//     category: "Wearables",
//   },
//   {
//     productId: "P009",
//     name: "Digital Camera",
//     price: 599.99,
//     description: "Capture high-resolution photos and videos with this camera.",
//     image: "https://via.placeholder.com/150",
//     category: "Photography",
//   },
//   {
//     productId: "P010",
//     name: "E-Reader",
//     price: 129.99,
//     description: "Read your favorite books on this compact e-reader.",
//     image: "https://via.placeholder.com/150",
//     category: "Electronics",
//   },
// ];

//     // Insert products into the database
//     Product.deleteMany({})
//       .then(() => Product.insertMany(products))
//       .then(() => {
//         console.log("Sample products added to the database.");
//         mongoose.connection.close(); // Close connection after operation
//       })
//       .catch((err) => {
//         console.error("Error inserting products:", err);
//         mongoose.connection.close();
//       });
//   })
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

import Product from "./models/Product.js"; // Ensure this path is correct

const populateDatabase = async () => {
  const products = [
    {
      productId: "C001",
      brand: "Zara",
      name: "Men's Casual Shirt",
      price: 45,
      description: "A comfortable cotton shirt perfect for everyday wear.",
      image:
        "https://i.pinimg.com/736x/6d/fa/b5/6dfab5a20bcdd7fc3d1a8ff54295bea0.jpg",
      category: "Clothing",
      ratings: 4.3,
      reviews: [
        { user: "Alice", comment: "Great fit and quality!", rating: 5 },
        { user: "Bob", comment: "Nice shirt, but a bit pricey.", rating: 4 },
      ],
    },
    {
      productId: "C002",
      brand: "H&M",
      name: "Women's Summer Dress",
      price: 60,
      description: "A lightweight and breathable dress ideal for summer.",
      image:
        "https://i.pinimg.com/736x/6d/fa/b5/6dfab5a20bcdd7fc3d1a8ff54295bea0.jpg",
      category: "Clothing",
      ratings: 4.7,
      reviews: [
        { user: "Claire", comment: "Love the design and material!", rating: 5 },
        { user: "Emma", comment: "Beautiful but could be longer.", rating: 4 },
      ],
    },
    {
      productId: "C003",
      brand: "Nike",
      name: "Men's Sports Jacket",
      price: 120,
      description: "A water-resistant jacket designed for outdoor activities.",
      image:
        "https://i.pinimg.com/736x/6d/fa/b5/6dfab5a20bcdd7fc3d1a8ff54295bea0.jpg",
      category: "Clothing",
      ratings: 4.8,
      reviews: [
        {
          user: "John",
          comment: "Perfect for jogging in the rain!",
          rating: 5,
        },
        { user: "Mike", comment: "Stylish and comfortable.", rating: 4 },
      ],
    },
    {
      productId: "C004",
      brand: "Adidas",
      name: "Women's Yoga Pants",
      price: 50,
      description: "High-stretch yoga pants for flexibility and comfort.",
      image:
        "https://i.pinimg.com/736x/6d/fa/b5/6dfab5a20bcdd7fc3d1a8ff54295bea0.jpg",
      category: "Clothing",
      ratings: 4.6,
      reviews: [
        {
          user: "Sophie",
          comment: "Super comfortable for workouts!",
          rating: 5,
        },
        {
          user: "Lila",
          comment: "Nice material but slightly thin.",
          rating: 4,
        },
      ],
    },
    {
      productId: "C005",
      brand: "Uniqlo",
      name: "Men's Down Jacket",
      price: 150,
      description:
        "Ultra-light down jacket that provides excellent insulation.",
      image:
        "https://i.pinimg.com/736x/6d/fa/b5/6dfab5a20bcdd7fc3d1a8ff54295bea0.jpg",
      category: "Clothing",
      ratings: 4.9,
      reviews: [
        { user: "Tom", comment: "Perfect for winter!", rating: 5 },
        {
          user: "Sam",
          comment: "Keeps me warm without being bulky.",
          rating: 5,
        },
      ],
    },
    {
      productId: "C006",
      brand: "Levi's",
      name: "Women's Skinny Jeans",
      price: 70,
      description: "Classic skinny jeans with a modern fit.",
      image:
        "https://i.pinimg.com/736x/6d/fa/b5/6dfab5a20bcdd7fc3d1a8ff54295bea0.jpg",
      category: "Clothing",
      ratings: 4.4,
      reviews: [
        { user: "Anna", comment: "Great fit and stretch!", rating: 5 },
        { user: "Maria", comment: "Good quality denim.", rating: 4 },
      ],
    },
    {
      productId: "C007",
      brand: "Puma",
      name: "Men's Polo T-Shirt",
      price: 35,
      description: "A casual polo t-shirt with a sporty vibe.",
      image:
        "https://i.pinimg.com/736x/6d/fa/b5/6dfab5a20bcdd7fc3d1a8ff54295bea0.jpg",
      category: "Clothing",
      ratings: 4.2,
      reviews: [
        { user: "Jake", comment: "Looks great and feels light.", rating: 4 },
        { user: "Ryan", comment: "Decent quality for the price.", rating: 4 },
      ],
    },
    {
      productId: "C008",
      brand: "Forever 21",
      name: "Women's Floral Top",
      price: 25,
      description: "A trendy floral top for casual outings.",
      image:
        "https://i.pinimg.com/736x/6d/fa/b5/6dfab5a20bcdd7fc3d1a8ff54295bea0.jpg",
      category: "Clothing",
      ratings: 4.5,
      reviews: [
        { user: "Ella", comment: "Very cute and comfy!", rating: 5 },
        { user: "Mia", comment: "Love the design.", rating: 4 },
      ],
    },
    {
      productId: "C009",
      brand: "Columbia",
      name: "Men's Hiking Pants",
      price: 80,
      description: "Durable hiking pants with water-repellent fabric.",
      image: "https://example.com/images/mens-hiking-pants.jpg",
      category: "Clothing",
      ratings: 4.7,
      reviews: [
        { user: "Liam", comment: "Perfect for outdoor adventures.", rating: 5 },
        { user: "Noah", comment: "Great quality and fit.", rating: 5 },
      ],
    },
    {
      productId: "C010",
      brand: "GAP",
      name: "Women's Cardigan Sweater",
      price: 55,
      description: "A soft cardigan for layering in chilly weather.",
      image: "https://example.com/images/womens-cardigan-sweater.jpg",
      category: "Clothing",
      ratings: 4.8,
      reviews: [
        { user: "Isabella", comment: "So cozy and warm!", rating: 5 },
        { user: "Sophia", comment: "Great for office wear.", rating: 4 },
      ],
    },
    {
      productId: "C011",
      brand: "Zara",
      name: "Men's Formal Blazer",
      price: 180,
      description: "A classic formal blazer for business occasions.",
      image: "https://example.com/images/mens-formal-blazer.jpg",
      category: "Clothing",
      ratings: 4.6,
      reviews: [
        { user: "Ethan", comment: "Perfect fit and classy.", rating: 5 },
        { user: "James", comment: "High quality fabric.", rating: 5 },
      ],
    },
    {
      productId: "C012",
      brand: "Adidas",
      name: "Women's Running Shorts",
      price: 30,
      description: "Lightweight running shorts for optimal performance.",
      image: "https://example.com/images/womens-running-shorts.jpg",
      category: "Clothing",
      ratings: 4.3,
      reviews: [
        { user: "Emily", comment: "Great for workouts.", rating: 4 },
        { user: "Ava", comment: "Very comfortable.", rating: 4 },
      ],
    },
    {
      productId: "C013",
      brand: "H&M",
      name: "Men's Wool Coat",
      price: 200,
      description: "A stylish wool coat for cold weather.",
      image: "https://example.com/images/mens-wool-coat.jpg",
      category: "Clothing",
      ratings: 4.9,
      reviews: [
        {
          user: "Henry",
          comment: "Keeps me warm and looks elegant.",
          rating: 5,
        },
        { user: "Oscar", comment: "Worth every penny.", rating: 5 },
      ],
    },
  ];
  
    // Add other products here...
  

  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Sample products added to the database.");
  } catch (err) {
    console.error("Error populating database:", err);
  }
};

export default populateDatabase;
