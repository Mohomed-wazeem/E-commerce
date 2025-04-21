// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

// export const Header = () => {
//   return (
//     <header>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
//         <div className="container-fluid">
//           <a className="navbar-brand fw-bold" href="#">
//             <i className=" me-2"></i>Store
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavDropdown"
//             aria-controls="navbarNavDropdown"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNavDropdown">
//             <ul className="navbar-nav ms-auto ">
//             <li className="nav-item">
//                 <a className="nav-link text-white" href="#">
//                     <i className="fas fa-right-to-bracket me-1"></i> Login
//                 </a>
//             </li>

//               <li className="nav-item">
//                 <a className="nav-link text-white" href="#">
//                     <i className="fas fa-shopping-cart me-1"></i> Cart
//                 </a>
//               </li>

            
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand fw-bold fs-4 d-flex align-items-center" href="#">
            <i className="text-warning me-2"></i><span className='text-warning fs-1 fw-bold'>G</span>
            lobe Store
          </a>

          {/* Toggler */}
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

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item mx-2">
                <a className="nav-link text-white d-flex align-items-center" href="#">
                  <i className="fas fa-right-to-bracket me-1 text-info"></i>
                  <span className="hover-underline">Login</span>
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-white d-flex align-items-center" href="#">
                  <i className="fas fa-shopping-cart me-1 text-warning"></i>
                  <span className="hover-underline">Cart</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Custom Hover Style */}
      <style jsx="true">{`
        .hover-underline:hover {
          text-decoration: underline;
        }
        .nav-link:hover {
          color: #ffc107 !important;
        }
      `}</style>
    </header>
  );
};
