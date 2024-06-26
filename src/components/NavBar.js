import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar bg-dark fixed-top border-bottom border-body navbar-expand-lg "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News Monkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/News/business">
                  {" "}
                  Business{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="News/entertainment">
                  {" "}
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/News/health">
                  {" "}
                  Health{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/News/science">
                  {" "}
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/News/sports">
                  {" "}
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/News/technology">
                  {" "}
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
