import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="div_home">
      <div className="container_home">
        <h5>Weclome To Marhaba</h5>
        <button className="btn_login">
          <Link className="text_login" to="/Login">
            Login
          </Link>
        </button>

        <button className="btn_register">
          <Link className="text_register" to="/Register">
            Register
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
