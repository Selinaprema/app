const express = require("express");
const cors = require("cors");
const app = express();
// Define the port number for the server
const PORT = process.env.PORT || 5000;
// Enable Cross-Origin Resource Sharing
app.use(cors());
// Define the route to retrieve the message
app.get("/api/data", (req, res) => {
  const data = { message: "Hello from the back end!" };
  res.json(data); // Send data as a response
});

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello, this is your new message!" });
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
