import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary align-items-center justify-content-center bg-transparent d-flex">
      <div className="container">
          <div>
            <button
              className="navbar-toggler"
              type="button"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
         

        <img
            className="navbar-brand d-flex align-items-center justify-content-center"
            src="https://images.ctfassets.net/vy53kjqs34an/3b6vBa9H4jGNZQvpCDV9sm/ca9a29433c61e153eaa123f7fb59ec15/website_RiyadhSeason_w.png?fm=webp&w=85&h=110"
            alt=""
            height={100}
          />

      <div className="ms-auto d-flex align-items-center justify-content-right">
        <button className="btn btn-sm me-2" type="button">
          العربية
        </button>
        <button className="btn btn-primary" type="button">
          View Booklet
        </button>
      </div>
       </div>
    </nav>
  );
};

export default Navbar;


