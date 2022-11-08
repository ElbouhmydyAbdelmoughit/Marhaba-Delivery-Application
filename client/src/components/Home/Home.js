import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active ">
                <Link to="/Login" className="nav-link ">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Register" className="nav-link text-end">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <h1>Welcome To Home Page</h1>
    </div>
  );
};

export default Home;
