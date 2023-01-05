import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Reset from "./components/Reset/Reset";
import Client from "./components/Client/Client";
import Livreur from "./components/Livreur/Livreur";
import ERROR404 from "./components/ERROR404/ERROR404";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ERROR404 />} />
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Reset" element={<Reset />} />
          <Route path="Client" element={<Client />} />
          <Route path="Livreur" element={<Livreur />} />
        </Routes>
      </BrowserRouter>
     </Provider>
  );
};

export default App;
