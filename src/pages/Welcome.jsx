import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Welcome() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get("https://assign04-backend.onrender.com/api/welcome", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setName(localStorage.getItem("name") || res.data.name))
      .catch(() => navigate("/login"));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/"); // go back to main page
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome, {name}!</h2>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default Welcome;
