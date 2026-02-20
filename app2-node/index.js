const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from App 2 - Node.js Express!");
});

app.listen(9002, () => {
  console.log("App running on port 9002");
});
