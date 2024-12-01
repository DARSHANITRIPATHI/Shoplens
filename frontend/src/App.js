
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing components
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Shop from "./Components/Shop/Shop";
import Product from "./Components/Product/Product";
import "./App.css"; // Optional: if you want to style the App component as well
import Footer from "./Components/Footer/Footer";
 
const App = () => {
  //  console.log("jhcvejhjff")
  return (
    <div>
      <Router>
        {/* Navbar for navigation */}
        <Navbar />

        {/* Hero section on the home page */}

        {/* <Shop/> */}
        {/* Define routes for Shop and Product pages */}
        <Routes>
          {/* Home page displaying all products */}
          {/* <Route path="/" element={<Shop />} /> */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Shop />
              </>
            }
          />
          {/* Product detail page for a specific product */}
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
