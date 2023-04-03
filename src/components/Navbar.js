import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  const handleAboutBtn = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };

  const handleContactBtn = () => {
    window.scrollTo({
      top: 5000,
      behavior: "smooth",
    });
  };
  const handleHomeBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });


    setTimeout(() => {
      handleAboutBtn();
    },3000);

  };

  return (
    <div className="cardClass sticky-top navbar-body  ">
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <div onClick={handleHomeBtn} className="navbar-brand text-dark ">
            <Link to="/" style={{ all: "unset" }}>
              
              Manglesh
            </Link>
          </div>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div
                  onClick={handleHomeBtn}
                  className="nav-link active text-dark"
                >
                  <Link to="/" style={{ all: "unset" }}>
                    Home
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link active text-dark">
                  <Link to="/coding" style={{ all: "unset" }}>
                    Coding
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link active text-dark">
                  <Link to="/music-production" style={{ all: "unset" }}>
                    Music
                  </Link>
                </div>
              </li>

              <li className="nav-item">
                <div
                  onClick={handleContactBtn}
                  className="nav-link active text-dark"
                >
                  <Link to="/contact" style={{ all: "unset" }}>
                    Contact
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
