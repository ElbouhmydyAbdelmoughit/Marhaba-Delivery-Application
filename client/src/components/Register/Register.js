import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

export const Register = () => {
  /* Create use state */
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirm_password, setConfirm_password] = useState(null);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirm_Password") {
      setConfirm_password(value);
    }
  };

  const handleSubmit = () => {
    console.log(name + " " + email + " " + password + " " + confirm_password);
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
                        onChange={(event)=>setName(event.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="email"
                        onChange={(event)=>setEmail(event.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        id="password"
                        onChange={(event)=>setPassword(event.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label">Confir Password</label>
                      <input
                        type="confirm_password"
                        className="form-control"
                        placeholder="Confirm Password"
                        id="confirm_password"
                        onChange={(event)=>setConfirm_password(event.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-primary submit px-3"
                        onClick={() => {
                          handleSubmit();
                        }}
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
    </div>
  );
};

export default Register;
