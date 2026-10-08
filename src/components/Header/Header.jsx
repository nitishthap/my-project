import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        Get up to 50% off new season styles, limited time only
      </div>

      {/* HEADER */}
      <header className="header">

        {/* MAIN HEADER */}
        <div className="header-main">

          {/* LOGO */}
          <a href="/" className="logo-area">
            <img
              src="/logo.png"
              alt="ClassyShop"
              className="logo-image"
            />

            <div>
              <h2>CLASSYSHOP</h2>
              <p>BIG MEGA STORE</p>
            </div>
          </a>

          {/* SEARCH */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search for products..."
            />
            <button>Search</button>
          </div>

          {/* RIGHT SIDE */}
          <div className="header-links">
            <a href="/login">Login</a>

            <span>/</span>

            <a href="/register">Register</a>

            <span className="header-icon">♡</span>

             <span className="header-icon">🔁</span>

            <span className="header-icon">🛒</span>
          </div>

        </div>

        {/* NAVIGATION */}
        <nav className="navigation">

          <div className="category-menu">
            ☰ &nbsp; SHOP BY CATEGORIES
          </div>

          <a href="/">Home</a>

          <a href="#">Fashion</a>

          <a href="#">New Arrivals</a>

          <a href="#">All Brands</a>

          <a href="#">More</a>

          <div className="delivery">
            Free International Delivery
          </div>

        </nav>

      </header>
    </>
  );
}

export default Header;