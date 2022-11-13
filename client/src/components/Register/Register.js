import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Generator from "../../help/Generator";

const URL = "http://localhost:8080/api/auth/";

const Register = () => {
  const navigate = useNavigate();
  /* Create use state */

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChanged = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name.trim() === "") {
      Generator("error", "Please Entre Your Name");
    } else if (user.email.trim() === "") {
      Generator("error", "Please Entre Your Email");
    } else if (user.password.trim() === "") {
      Generator("error", "Please Entre Your Password");
    } else if (user.confirm_password.trim() === "") {
      Generator("error", "Please Confirm Password");
    } else if (user.password.length < 5 || user.password.length > 12) {
      Generator("error", "Oops Entre Password between 5 and 12 caracter");
    } else if (user.password !== user.confirm_password) {
      Generator("error", "Oops Password or Confirm Password Incorrect");
    }

    axios
      .post(URL + "register", {
        ...user,
      })
      .then(() => {
        Generator("success", "Registeration is successfully 😊");
        navigate("/Login");
      })
      .catch((error) => {
        Generator("error", error.response.data);
      });
  };

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
                      to="/Login"
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
                      <label className="label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        id="name"
                        onChange={handleChanged}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="email"
                        onChange={handleChanged}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        autoComplete="on"
                        id="password"
                        onChange={handleChanged}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label">Confir Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        id="confirm_password"
                        autoComplete="on"
                        onChange={handleChanged}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-primary submit px-3"
                        onClick={handleSubmit}
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};
export default Register;
