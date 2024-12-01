import React, { useState } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import cart_logo from "../assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={logo} alt="logo" />
        <p>SHOPLENS</p>
      </div>

      <div className={`nav-mid ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li
            onClick={() => {
              setMenu("shop");
              setIsMenuOpen(false); // Close menu after selecting
            }}
          >
            SHOP{menu === "shop" ? <hr /> : null}
          </li>
          <li
            onClick={() => {
              setMenu("mens");
              setIsMenuOpen(false);
            }}
          >
            MEN{menu === "mens" ? <hr /> : null}
          </li>
          <li
            onClick={() => {
              setMenu("womens");
              setIsMenuOpen(false);
            }}
          >
            WOMEN{menu === "womens" ? <hr /> : null}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
              setIsMenuOpen(false);
            }}
          >
            KIDS{menu === "kids" ? <hr /> : null}
          </li>
        </ul>
      </div>

      <div className="nav-right">
        <button>Login</button>
        <img src={cart_logo} alt="cart" />
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
