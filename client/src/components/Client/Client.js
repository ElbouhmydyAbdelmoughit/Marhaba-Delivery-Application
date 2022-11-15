import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Client = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  useEffect(() => {
    if (location.state !== "client") {
      navigate("/Login");
    }
  }, []);
  return (
    <div>
      <h1>Welcome To Client page </h1>
    </div>
  );
};

export default Client;
