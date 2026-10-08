import React from "react";

function Home() {
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
            <span className="active">FASHION</span>
            <span>ELECTRONICS</span>
            <span>BAGS</span>
            <span>FOOTWEAR</span>
            <span>GROCERIES</span>
            <span>WELLNESS</span>
            <span>JEWELLERY</span>
            <span>BEAUTY</span>
          </div>

        </div>


        <div className="products-grid">

          {/* PRODUCT 1 */}
          <div className="product-card">

            <div className="discount">-30%</div>

            <img
              src="/image/hero.jpg"
              alt="EVERBLOUE Men's Polo Shirt"
            />

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
              src="/image/hero.jpg"
              alt="EVERBLOUE Men's Striped Polo"
            />

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
              src="/image/chair.png"
              alt="VADUKA Elegant Women"
            />

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
              src="/image/camera.jpg"
              alt="Nemosa Women Red Printed"
            />

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
              src="/image/camera.jpg"
              alt="Nemosa Women Red Printed"
            />

            <h3>Nemosa Women Red Printed</h3>

            <div className="stars">★★★★★</div>

            <p className="product-price">
              $39.00 <del>$49.00</del>
            </p>

          </div>
 {/* PRODUCT 4 */}
          <div className="product-card">

            <div className="discount">-15%</div>

            <img
              src="/image/camera.jpg"
              alt="Nemosa Women Red Printed"
            />

            <h3>Nemosa Women Red Printed</h3>

            <div className="stars">★★★★★</div>

            <p className="product-price">
              $39.00 <del>$49.00</del>
            </p>

          </div>


        </div>

      </section>

    </main>
  );
}

export default Home;