import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({}); // State for first message
  const [customMessage, setCustomMessage] = useState(""); // State for new message

  useEffect(() => {
    fetchData(); // Fetch both messages on component mount
    fetchMessage();
  }, []);

  // Function to fetch first message (from /api/data)
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/data");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to fetch custom message (from /api/message)
  const fetchMessage = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/message");

      setCustomMessage(response.data.message);
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{data.message || "Loading original message..."}</h1>
        <h2>{customMessage || "Loading custom message..."}</h2>
      </header>
    </div>
  );
}

export default App;
