const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.send({ title: "Roya", message: "Hello World" });
});

module.exports = app;
