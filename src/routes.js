const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("SERVER LIGADO");
});

app.listen(port, () => {
  console.log(`Server ligado ${port}`);
});

app.get("/get",  function (req, res) {
  res.send("GET ON");
});

app.post("/post", function (req, res) {
  res.send("Got a POST request");
});
app.put("/put", function (req, res) {
  res.send("Got a PUT request at /user");
});
