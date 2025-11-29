import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Assignment 4 App</h1>
      <div style={{ marginTop: "20px" }}>
        <Link to="/register">
          <button style={{ marginRight: "10px" }}>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default App;



