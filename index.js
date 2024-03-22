const express = require("express");

// Configuration env
require("dotenv").config();

// Express instance
const server = express();
const PORT = process.env.PORT || 3001;

// GET ENDPOINT
server.get("/", (req, res) => {
  res.send("Hello world: TS, Node.js, Express, Jest, Swagger");
});

// Server listening

server.listen(PORT, () => {
  console.log(`Server listening in port: ${PORT}`);
});
