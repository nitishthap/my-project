import React from "react";

function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">

        {/* BIG BANNER */}
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

        {/* RIGHT SIDE */}
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
    </main>
  );
}

export default Home;