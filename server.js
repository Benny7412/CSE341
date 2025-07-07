const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Worldsgit config --list --show-origin | grep -E 'user.name|user.email'");
});

const port = 3000;

app.listen(process.env.port || port, () => {
  console.log("Server is running at port " + (process.env.port || port));
});
