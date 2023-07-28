const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.join(__dirname, "src", "static")));

app.get("/*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

app.listen(80, () => console.log("Server running"));
