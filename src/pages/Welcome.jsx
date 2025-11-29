import { useEffect, useState } from "react";
import axios from "axios";

export default function Welcome() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("https://assign04-backend.onrender.com/api/welcome", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setMessage(res.data.message))
    .catch(err => setMessage("Unauthorized"));
  }, []);

  return (
    <div>
      <h2>Welcome Page</h2>
      <p>{message}</p>
    </div>
  );
}
