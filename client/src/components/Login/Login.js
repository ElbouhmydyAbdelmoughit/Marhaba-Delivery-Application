import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center"></div>
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex">
                <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                  <div className="text w-100">
                    <h2>Welcome to login</h2>
                    <p>Don't have an account?</p>
                    <Link
                      to="/Register"
                      className="btn btn-white btn-outline-white"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
                <div className="login-wrap p-4 p-lg-5">
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4">Sign In</h3>
                    </div>
                  </div>
                  <form action="#" className="signin-form">
                    <div className="form-group mb-3">
                      <label className="label">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-primary submit px-3"
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="form-group d-md-flex">
                      <div className="w-50 text-md-right">
                        <Link to={""}>Forgot Password</Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
