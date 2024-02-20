import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="side-bar d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white">
      <span className="fs-5 d-none d-sm-inline">Menu</span>
      <ul
        className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
        id="menu"
      >
        <li className="nav-item">
          <Link to="/" className="nav-link align-middle px-0">
            <i className="fs-4 bi-house"></i>{" "}
            <span className="ms-1 d-none d-sm-inline">Home</span>
          </Link>
        </li>

        <li>
          <Link
            to="/products"
            // data-bs-toggle="collapse"
            className="nav-link px-0 align-middle"
          >
            <i className="fs-4 bi-grid"></i>{" "}
            <span className="ms-1 d-none d-sm-inline">Products</span>{" "}
          </Link>
        </li>

        <li>
          <Link to="/about" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-grid"></i>
            <span className="ms-1 d-none d-sm-inline">About Page</span>
          </Link>
        </li>

        <li>
          <Link to="/contact-us" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-grid"></i>
            <span className="ms-1 d-none d-sm-inline">Contact-Us Page</span>
          </Link>
        </li>

        {/* <li>
          <Link to="/categories" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-people"></i>{" "}
            <span className="ms-1 d-none d-sm-inline">Categories</span>{" "}
          </Link>
        </li> */}

        <li>
          <Link
            to="#submenu1"
            data-bs-toggle="collapse"
            className="nav-link px-0 align-middle"
          >
            <i className="fs-4 bi-speedometer2"></i>{" "}
            <span className="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
          </Link>
          <ul
            className="collapse show nav flex-column ms-1"
            id="submenu1"
            data-bs-parent="#menu"
          >
            <li className="w-100">
              <Link to="/" className="nav-link px-0">
                {" "}
                <span className="d-none d-sm-inline">Item</span> 1{" "}
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <hr />
      <div className="dropdown pb-4">
        <Link
          to="/#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="hugenerd"
            width="30"
            height="30"
            className="rounded-circle"
          />
          <span className="d-none d-sm-inline mx-1">loser</span>
        </Link>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <Link className="dropdown-item" to="/#">
              New project...
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/#">
              Settings
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/#">
              Profile
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="/#">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
