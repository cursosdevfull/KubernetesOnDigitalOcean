const express = require("express");

const PORT = 5500;
const HOST = "0.0.0.0";
const app = express();

app.get("/", (req, res) => {
  res.send("Mensaje enviado desde NodeJS");
});

app.listen(PORT, HOST);

console.log(`Server is running on http://${HOST}:${PORT}`);
