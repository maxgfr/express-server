const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

app.post("/", (req, res) => {
  const data = req.body;
  const headers = req.headers;
  console.log("Headers:", headers);
  console.log("Data:", data);
  res.send({ result: "Data received !" });
});

app.get("/", (_req, res) => {
  res.json({ result: "Bonjour :)" });
});

app.listen(80, () => {
  console.log("Running on port 80");
});
