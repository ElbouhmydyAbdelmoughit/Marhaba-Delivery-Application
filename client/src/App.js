import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Reset from "./components/Reset/Reset";
import ERROR404 from "./components/ERROR404/ERROR404";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="*" element={<ERROR404 />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="Login" element={<Login />} />
        <Route exact path="Register" element={<Register />} />
        <Route exact path="Reset" element={<Reset />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
