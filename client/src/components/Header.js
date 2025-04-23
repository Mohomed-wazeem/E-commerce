import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

export const Header = () => {
  const addToCartReducer = useSelector(state => state.addToCartReducer);

  const { cartItems } = addToCartReducer;

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-2">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4 d-flex align-items-center" href="#">
            <span className="text-warning fs-1 fw-bold">G</span>
            lobe <span className="text-warning fs-1 fw-bold">S</span>tore
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto align-items-lg-center flex-column flex-lg-row">
              <li className="nav-item mx-2 mb-2 mb-lg-0">
                <a className="btn btn-outline-light px-4 py-2 rounded-pill fw-semibold" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item mx-2">
              <Link
  to="/cart"
  className="position-relative text-warning fs-5 text-decoration-none"
>
  <i className="fas fa-shopping-cart mt-4"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cartItems.length}
  </span>
</Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx="true">{`
        .btn-outline-light:hover {
          background-color: #ffc107;
          color: #212529;
          border-color: #ffc107;
        }
      `}</style>
    </header>
  );
};
