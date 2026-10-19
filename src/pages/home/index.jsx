import React, {useState,useEffect} from "react";

function Home() {
  const productImages = [
  "/image/hero1.jpg",
  "/image/hero2.jpg",
  "/image/hero3.png",
  "/image/hero4.jpg",
];


  const [activeTab, setActiveTab] = React.useState("FASHION");
const [imageIndex, setImageIndex] = useState(0);
useEffect(() => {
  const timer = setInterval(() => {
    setImageIndex((prev) => (prev + 1) % productImages.length);
  }, 3000);

  return () => clearInterval(timer);
}, [productImages.length]);



  return (
    <main className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">

        {/* MAIN BANNER */}
        <div className="main-banner">

          <img
            src="/image/hero.jpg"
            alt="Big Saving Days Sale"
          />

          <div className="banner-content">
            <p>Big Saving Days Sale</p>

            <h2>
              Men Solid Round
              <br />
              Green T-Shirt
            </h2>

            <div className="price">
              Starting At Only <strong>$59.00</strong>
            </div>

            <button>SHOP NOW</button>
          </div>

          <div className="slider-dots">
            <span className="active"></span>
            <span></span>
          </div>

        </div>


        {/* RIGHT SIDE BANNERS */}
        <div className="side-banners">

          {/* CAMERA */}
          <div className="side-banner">

            <div className="side-content">
              <h3>
                Samsung Gear
                <br />
                VR Camera
              </h3>

              <strong>$129.00</strong>

              <a href="#">SHOP NOW</a>
            </div>

            <img
              src="/image/camera.jpg"
              alt="Samsung Gear VR Camera"
            />

          </div>


          {/* CHAIR */}
          <div className="side-banner">

            <div className="side-content">
              <h3>
                Marcel Dining
                <br />
                Room Chair
              </h3>

              <strong>$129.00</strong>

              <a href="#">SHOP NOW</a>
            </div>

            <img
              src="/image/chair.png"
              alt="Marcel Dining Room Chair"
            />

          </div>

        </div>

      </section>


      {/* SHOP BY CATEGORIES */}
      <section className="categories-section">

        <h2>Shop By Categories</h2>

        <div className="categories-grid">

          <div className="category-card">
            <div className="category-icon">👗</div>
            <p>Fashion</p>
          </div>

          <div className="category-card">
            <div className="category-icon">📱</div>
            <p>Electronics</p>
          </div>

          <div className="category-card">
            <div className="category-icon">👜</div>
            <p>Bags</p>
          </div>

          <div className="category-card">
            <div className="category-icon">👟</div>
            <p>Footwear</p>
          </div>

          <div className="category-card">
            <div className="category-icon">🛒</div>
            <p>Groceries</p>
          </div>

          <div className="category-card">
            <div className="category-icon">🧘</div>
            <p>Wellness</p>
          </div>

          <div className="category-card">
            <div className="category-icon">💍</div>
            <p>Jewellery</p>
          </div>

          <div className="category-card">
            <div className="category-icon">💄</div>
            <p>Beauty</p>
          </div>

        </div>

      </section>


      {/* POPULAR PRODUCTS */}
      <section className="products-section">

        <div className="products-heading">

          <div>
            <h2>Popular Products</h2>
            <p>
              Do not miss the current offers until the end of March.
            </p>
          </div>

        <div className="product-tabs">
  {[
    "FASHION",
    "ELECTRONICS",
    "BAGS",
    "FOOTWEAR",
    "GROCERIES",
    "WELLNESS",
    "JEWELLERY",
    "BEAUTY",
  ].map((tab) => (
    <button
      key={tab}
      className={activeTab === tab ? "active" : ""}
      onClick={() => setActiveTab(tab)}
    >
      {tab}
    </button>
  ))}
</div>

        </div>


        <div className="products-grid">

          {/* PRODUCT 1 */}
          <div className="product-card">

            <div className="discount">-30%</div>

            <img
  src={productImages[imageIndex]}
  alt="EVERBLOUE Men's Polo Shirt"
/>
<div className="image-change-buttons">
  {productImages.map((image, index) => (
    <button
      key={image}
      type="button"
      onClick={() => setImageIndex(index)}
      style={{
        padding: "6px 12px",
        margin: "4px",
        cursor: "pointer"
      }}
    >
      {index + 1}
    </button>
  ))}
</div>

<div className="image-change-buttons">
  <button
    type="button"
    onClick={() =>
      setImageIndex(
        (imageIndex - 1 + productImages.length) %
          productImages.length
      )
    }
  >
    ❮
  </button>

  <button
    type="button"
    onClick={() =>
      setImageIndex(
        (imageIndex + 1) % productImages.length
      )
    }
  >
    ❯
  </button>
</div>
            <div className="product-actions">
 
   <button title="Wishlist">⛶</button>
  <button title="Compare">⇄</button>
  <button title="Quick view">♡</button>
</div>

            <h3>EVERBLOUE Men's Polo Shirt</h3>

            <div className="stars">★★★★★</div>

            <p className="product-price">
              $29.00 <del>$39.00</del>
            </p>

          </div>


          {/* PRODUCT 2 */}
          <div className="product-card">

            <div className="discount">-20%</div>

            <img


src={productImages[imageIndex]}
  alt="EVERBLOUE Men's Polo Shirt"
/>
<div className="image-change-buttons">
  {productImages.map((image, index) => (
    <button
      key={image}
      type="button"
      onClick={() => setImageIndex(index)}
      style={{
        padding: "6px 12px",
        margin: "4px",
        cursor: "pointer"
      }}
    >
      {index + 1}
    </button>
  ))}
</div>

<div className="image-change-buttons">
  <button
    type="button"
    onClick={() =>
      setImageIndex(
        (imageIndex - 1 + productImages.length) %
          productImages.length
      )
    }
  >
    ❮
  </button>

  <button
    type="button"
    onClick={() =>
      setImageIndex(
        (imageIndex + 1) % productImages.length
      )
    }
  >
    ❯
  </button>
</div>

             <div className="product-actions">
 
   <button title="Wishlist">⛶</button>
  <button title="Compare">⇄</button>
  <button title="Quick view">♡</button>
</div>


            <h3>EVERBLOUE Men's Striped Polo</h3>

            <div className="stars">★★★★★</div>

            <p className="product-price">
              $35.00 <del>$45.00</del>
            </p>

          </div>

          {/* PRODUCT 3 */}
          <div className="product-card">

            <div className="discount">-25%</div>

            <img
             src={productImages[imageIndex]}
  alt="EVERBLOUE Men's Polo Shirt"
/>
<div className="image-change-buttons">
  {productImages.map((image, index) => (
    <button
      key={image}
      type="button"
      onClick={() => setImageIndex(index)}
      style={{
        padding: "6px 12px",
        margin: "4px",
        cursor: "pointer"
      }}
    >
      {index + 1}
    </button>
  ))}
</div>

<div className="image-change-buttons">
  <button
    type="button"
    onClick={() =>
      setImageIndex(
        (imageIndex - 1 + productImages.length) %
          productImages.length
      )
    }
  >
    ❮
  </button>

  <button
    type="button"
    onClick={() =>
      setImageIndex(
        (imageIndex + 1) % productImages.length
      )
    }
  >
    ❯
  </button>
</div>
 <div className="product-actions">
  
   <button title="Wishlist">⛶</button>
  <button title="Compare">⇄</button>
  <button title="Quick view">♡</button>
</div>

            <h3>VADUKA Elegant Women</h3>

            <div className="stars">★★★★★</div>

            <p className="product-price">
              $45.00 <del>$56.00</del>
            </p>

          </div>


          {/* PRODUCT 4 */}
          <div className="product-card">

            <div className="discount">-15%</div>

            <img

            src={productImages[imageIndex]}
  alt="EVERBLOUE Men's Polo Shirt"
/>
<div className="image-change-buttons">
  {productImages.map((image, index) => (
    <button
      key={image}
      type="button"
      onClick={() => setImageIndex(index)}
      style={{
        padding: "6px 12px",
        margin: "4px",
        cursor: "pointer"
      }}
    >
      {index + 1}
    </button>
  ))}
</div>

<div className="image-change-buttons">
  <button
    type="button"
    onClick={() =>
      setImageIndex(
        (imageIndex - 1 + productImages.length) %
          productImages.length
      )
    }
  >
    ❮
  </button>

  <button
    type="button"
    onClick={() =>
      setImageIndex(
        (imageIndex + 1) % productImages.length
      )
    }
  >
    ❯
  </button>
</div>
 <div className="product-actions">
 
   <button title="Wishlist">⛶</button>
  <button title="Compare">⇄</button>
  <button title="Quick view">♡</button>

</div>

            <h3>Nemosa Women Red Printed</h3>

            <div className="stars">★★★★★</div>

            <p className="product-price">
              $39.00 <del>$49.00</del>
            </p>

          </div>
           {/* PRODUCT 5 */}
          <div className="product-card">

            <div className="discount">-15%</div>

            <img
src={productImages[imageIndex]}
  alt="EVERBLOUE Men's Polo Shirt"
/>
<div className="image-change-buttons">
  {productImages.map((image, index) => (
    <button
      key={image}
      type="button"
      onClick={() => setImageIndex(index)}
      style={{
        padding: "6px 12px",
        margin: "4px",
        cursor: "pointer"
      }}
    >
      {index + 1}
    </button>
  ))}
</div>

<div className="image-change-buttons">
  <button
    type="button"
    onClick={() =>
      setImageIndex(
        (imageIndex - 1 + productImages.length) %
          productImages.length
      )
    }
  >
    ❮
  </button>

  <button
    type="button"
    onClick={() =>
      setImageIndex(
        (imageIndex + 1) % productImages.length
      )
    }
  >
    ❯
  </button>
</div>

 <div className="product-actions">
  <button title="Wishlist">⛶</button>
  <button title="Compare">⇄</button>
  <button title="Quick view">♡</button>
</div>

            <h3>Nemosa Women Red Printed</h3>

            <div className="stars">★★★★★</div>

            <p className="product-price">
              $39.00 <del>$49.00</del>
            </p>

          </div>
 {/* PRODUCT 6 */}
          <div className="product-card">

            <div className="discount">-15%</div>

            <img
            src={productImages[imageIndex]}
  alt="EVERBLOUE Men's Polo Shirt"
/>
<div className="image-change-buttons">
  {productImages.map((image, index) => (
    <button
      key={image}
      type="button"
      onClick={() => setImageIndex(index)}
      style={{
        padding: "6px 12px",
        margin: "4px",
        cursor: "pointer"
      }}
    >
      {index + 1}
    </button>
  ))}
</div>

<div className="image-change-buttons">
  <button
    type="button"
    onClick={() =>
      setImageIndex(
        (imageIndex - 1 + productImages.length) %
          productImages.length
      )
    }
  >
    ❮
  </button>

  <button
    type="button"
    onClick={() =>
      setImageIndex(
        (imageIndex + 1) % productImages.length
      )
    }
  >
    ❯
  </button>
</div>
             
 <div className="product-actions">
  <button title="Wishlist">⛶</button>
  <button title="Compare">⇄</button>
  <button title="Quick view">♡</button>
 
</div>

            <h3>Nemosa Women Red Printed</h3>

            <div className="stars">★★★★★</div>

            <p className="product-price">
              $39.00 <del>$49.00</del>
            </p>

          </div>


        </div>

      </section>
      {/* FREE SHIPPING BANNER */}
<section className="free-shipping">
  <div className="shipping-icon">🚚</div>
  <h3>FREE SHIPPING</h3>
  <p>Free Delivery Now On Your First Order and over $200</p>
  <h2>- Only $200*</h2>
</section>

{/* FOUR PROMOTIONAL BANNERS */}
<section className="promo-banners">

  <div className="promo-card promo-green">
    <img src="/image/phone.jpg" alt="Smartphone Deals" />
    <div className="promo-text">
      <h3>Smart Deals</h3>
      <p>Trending Smartphones</p>
      <h2>From ₹6,299</h2>
      <span>Shop Now →</span>
    </div>
  </div>

  <div className="promo-card promo-blue">
    <img src="/image/fashion.jpg" alt="Fashion Deals" />
    <div className="promo-text">
      <h3>Best Deals</h3>
      <p>On Fashion</p>
      <h2>50% Off</h2>
      <span>Shop Now →</span>
    </div>
  </div>

  <div className="promo-card promo-orange">
    <img src="/image/food.jpg" alt="Food Deals" />
    <div className="promo-text">
      <h3>TASTE KOREA'S</h3>
      <p>BEST TREATS</p>
      <span>Shop Now →</span>
    </div>
  </div>

  <div className="promo-card promo-winter">
    <img src="/image/winter.jpg" alt="Winter Savings" />
    <div className="promo-text">
      <h3>WINTER SAVINGS</h3>
      <p>Save Big on Winter Essentials</p>
      <h2>Up to 50% OFF</h2>
      <span>Shop Now →</span>
    </div>
  </div>

</section>
 {/* EXTRA 6 PRODUCTS - OLD OUTPUT UNCHANGED */}
<section className="extra-products">
  <h2>More Products</h2>

  <div className="extra-products-grid">
    {[
      { image: "/image/hero1.jpg", name: "Stylish Fashion Collection", price: "$49.00" },
      { image: "/image/hero2.jpg", name: "Trendy Casual Wear", price: "$45.00" },
      { image: "/image/hero3.png", name: "Elegant Printed Saree", price: "$58.00" },
      { image: "/image/hero4.jpg", name: "Modern Style Collection", price: "$39.00" },
      { image: "/image/camera.jpg", name: "Smart Camera", price: "$129.00" },
      { image: "/image/chair.png", name: "Modern Home Chair", price: "$45.00" },
    ].map((product, index) => (
      <div className="extra-product-card" key={index}>
        <img src={product.image} alt={product.name} />
        <div className="extra-product-info">
          <h3>{product.name}</h3>
          <div className="extra-stars">★★★★★</div>
          <strong>{product.price}</strong>
        </div>
      </div>
    ))}
  </div>
</section>
{/* THREE PROMO BANNERS */}
<section className="promo-banners">
  <div className="promo-card">
    <img src="/image/chair.png" alt="Smartphone deals" />
    <button className="promo-shop-btn">Shop Now →</button>
  </div>

  <div className="promo-card">
    <img src="/image/promo2.jpg" alt="Fashion deals" />
    <button className="promo-shop-btn">Shop Now →</button>
  </div>

  <div className="promo-card">
    <img src="/image/promo3.jpg" alt="Korean food deals" />
    <button className="promo-shop-btn">Shop Now →</button>
  </div>
</section>

{/* FROM THE BLOG */}
<section className="blog-section">
  <h2>From The Blog</h2>

  <div className="blog-grid">
    
    {[1, 2, 3, 4].map((item) => (
      <article className="blog-card" key={item}>
        <div className="blog-image">
          <img
            src="/image/blog1.jpg"
            alt="Technology and innovation"
          />
          <span className="blog-date">◷ 18 oct, 2026</span> 
        </div>

        <h3>Nullam ullamcorper ornare molestie</h3>
        <p>
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry...
        </p>
        <a href="#blog">Read More ›</a>
      </article>
    ))}
  </div>
</section>

{/* SERVICE FEATURES */}
<section className="service-features">
  <div className="service-item">
    <span className="service-icon">🚚</span>
    <h3>Free Shipping</h3>
    <p>For All Orders Over $100</p>
  </div>

  <div className="service-item">
    <span className="service-icon">↩️</span>
    <h3>30 Days Returns</h3>
    <p>For an Exchange Product</p>
  </div>

  <div className="service-item">
    <span className="service-icon">▱</span>
    <h3>Secured Payment</h3>
    <p>Payment Cards Accepted</p>
  </div>

  <div className="service-item">
    <span className="service-icon">♔</span>
    <h3>Special Gifts</h3>
    <p>Our First Product Order</p>
  </div>

  <div className="service-item">
    <span className="service-icon">☏</span>
    <h3>Support 24/7</h3>
    <p>Contact us Anytime</p>
  </div>
</section>
    </main>
  );
}

export default Home;