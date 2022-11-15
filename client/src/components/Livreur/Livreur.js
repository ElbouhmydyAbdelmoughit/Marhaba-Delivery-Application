import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Livreur = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state !== "client") {
      navigate("/Login");
    }
  }, []);
  return (
    <div>
      <h1>Welcome To Livreur page </h1>
    </div>
  );
};

export default Livreur;
