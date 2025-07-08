const express = require("express");
const app = express();
const lesson1Controller = require("./controllers/lesson1");

app.get("/", lesson1Controller.emilyRoute);

app.get("/blah", lesson1Controller.blahRoute);

const port = 3000;

app.listen(process.env.port || port, () => {
  console.log("Server is running at port " + (process.env.port || port));
});
