import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const URL = "http://localhost:8080/api/auth/";

/**
 * If the type is error, then display an error message. If the type is success, then display a success
 * message.
 * @param type - This is the type of the toast. It can be either error or success.
 * @param message - The message you want to display
 */
const generator = (type, message) => {
  if (type === "error") {
    toast.error(message, { position: "bottom-right" });
  }
  if (type === "success") {
    toast.success(message, { position: "bottom-right" });
  }
};

const Register = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.name.trim() === "") {
      console.log("entre name");
    }
    if (user.email.trim() === "") {
      console.log("entre email");
    }
    if (user.password.trim() === "") {
      console.log("entre password");
    }
    if (user.confirm_password.trim() === "") {
      console.log("entre confirm password");
      if (user.password !== user.confirm_password) {
        console.log("password or confirm password incorrect");
      }
    }
    try {
      const data = await axios.post(URL + "register", {
        ...user,
      });
      if (data) {
        generator("success", "data is sended successfully");
      } else {
        console.log("not ok");
      }
    } catch (error) {
      generator("error", error);
    }
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
