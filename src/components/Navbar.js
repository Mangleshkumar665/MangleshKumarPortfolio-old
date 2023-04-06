import React from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

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
    }, 3000);
  };

  return (
    <div className="cardClass sticky-top navbar-body  ">
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <motion.div
            onClick={handleHomeBtn}
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{ duration: 0.3 }}
            className="navbar-brand text-dark "
          >
            <Link to="/" style={{ all: "unset" }}>
              Manglesh
            </Link>
          </motion.div>
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
                <motion.div
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  onClick={handleHomeBtn}
                  className="nav-link active text-dark"
                >
                  <Link to="/" style={{ all: "unset" }}>
                    Home
                  </Link>
                </motion.div>
              </li>
              <li className="nav-item">
                <motion.div
                  className="nav-link active text-dark"
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="/coding" style={{ all: "unset" }}>
                    Coding
                  </Link>
                </motion.div>
              </li>
              <li className="nav-item">
                <motion.div
                  className="nav-link active text-dark"
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="/music-production" style={{ all: "unset" }}>
                    Music
                  </Link>
                </motion.div>
              </li>

              <li className="nav-item">
                <motion.div
                  onClick={handleContactBtn}
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  className="nav-link active text-dark"
                >
                  <Link to="/contact" style={{ all: "unset" }}>
                    Contact
                  </Link>
                </motion.div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
