import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import Generator from "../../help/Generator";
// const [reset, setReset] = useState({
//email:""
//first_password:"",
//new_password:""
//});
const Reset = () => {
  const handleChanged = () => {};
  const handleSubmit = () => {};

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
                    <h2>Reset Password</h2>
                    <p>If you want to Back To Home page click on home button</p>
                    <Link to="/" className="btn btn-white btn-outline-white">
                      Home
                    </Link>
                  </div>
                </div>
                <div className="login-wrap p-4 p-lg-5">
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4">Reset Password</h3>
                    </div>
                  </div>
                  <form action="#" className="signin-form">
                    <div className="form-group mb-3">
                      <label className="label">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        id="email"
                        onChange={handleChanged}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label">First Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="First Password"
                        id="first_password"
                        onChange={handleChanged}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label">New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="New Password"
                        autoComplete="on"
                        id="new_password"
                        onChange={handleChanged}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-primary submit px-3"
                        onClick={handleSubmit}
                      >
                        Reset
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

export default Reset;