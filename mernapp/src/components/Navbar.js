import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
// import Modal from "C:/Users/Dell/OneDrive/Pictures/Saved Pictures/Desktop/GoFood/mernapp/src/Modal.js";

// import { useCart } from "C:/Users/Dell/OneDrive/Pictures/Saved Pictures/Desktop/GoFood/mernapp/src/components/ContextReduce.js";
// import Cart from "C:/Users/Dell/OneDrive/Pictures/Saved Pictures/Desktop/GoFood/mernapp/src/screens/Cart.js";

export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove all relevant tokens or data from local storage
    localStorage.removeItem("authToken");
    // localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            GoFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav" // Use a valid CSS selector
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/myorder"
                  >
                    My Order
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              //   <div>
              //     <div
              //       className="btn bg-white text-success mx-2"
              //       onClick={() => {
              //         setCartView(true);
              //       }}
              //       // onClick={handleLogout}
              //     >
              //       My Cart{"  "}
              //       <Badge pill bg="danger">
              //         2
              //       </Badge>
              //     </div>
              //     {cartView ? (
              //       <Modal onClose={() => setCartView(false)}>
              //         <Cart></Cart>
              //       </Modal>
              //     ) : null}
              //     <div
              //       className="btn bg-white text-danger mx-2"
              //       onClick={handleLogout}
              //     >
              //       Logout
              //     </div>
              //   </div>
              // ) : (
              <div className="d-flex">
                <Link className="btn bg-white text-success mx-1" to="/login">
                  Login
                </Link>

                <Link
                  className="btn bg-white text-success mx-1"
                  to="/createuser"
                >
                  SignUp
                </Link>

                {/* <Link to="/createuser">SignUp</Link> */}
              </div>
            ) : (
              <div>
                <div
                  className="btn bg-white text-success mx-2 "
                  onClick={() => {
                    setCartView(true);
                  }}
                >
                  My Cart{" "}
                  <Badge pill bg="danger">
                    2
                  </Badge>
                </div>
                {cartView ? <Modal>onClose=</Modal> : null}

                <div
                  className="btn bg-white text-danger mx-2"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
