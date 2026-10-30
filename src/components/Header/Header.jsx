import React from "react";
import "./Header.css";

function Header() {
  const [showCategories, setShowCategories] = React.useState(false);
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
  <button
    type="button"
    className="category-menu-btn"
    onClick={() => setShowCategories(!showCategories)}
  >
    ☰ &nbsp; SHOP BY CATEGORIES
    <span>⌄</span>
  </button>

  {showCategories && (
    <div className="categories-dropdown">
      <a href="#fashion">Fashion</a>
      <a href="#electronics">Electronics</a>
      <a href="#bags">Bags</a>
      <a href="#footwear">Footwear</a>
      <a href="#groceries">Groceries</a>
      <a href="#beauty">Beauty</a>
      <a href="#wellness">Wellness</a>
      <a href="#jewellery">Jewellery</a>
    </div>
  )}
</div>

          <a href="/">Home</a>

          <div className="fashion-menu">
  <a href="#fashion" className="fashion-link">
    Fashion
  </a>

  <div className="fashion-dropdown">
    <div>
      <h4>Clothing</h4>
      <a href="#men">Men</a>
      <a href="#women">Women</a>
      <a href="#kids">Kids</a>
      <a href="#girls">Girls</a>
      <a href="#boys">Boys</a>
    </div>

    <div>
      <h4>Fashion Items</h4>
      <a href="#tshirt">T-Shirt</a>
      <a href="#jeans">Jeans</a>
      <a href="#footwear">Footwear</a>
      <a href="#watch">Watch</a>
    </div>
  </div>
</div>

          <a href="#">New Arrivals</a>

          <a href="#">All Brands</a>

          <a href="#">More</a>

          <div className="delivery">
           🚀 Free International Delivery
          </div>

        </nav>

      </header>
    </>
  );
}

export default Header;