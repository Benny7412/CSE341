const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const MongoClient = require("mongodb");
const routes = require("./routes");

const port = process.env.PORT || 8080;
const app = express();

app.use("/", require("./routes"));

app.listen(process.env.port || port);
console.log("Server is running at port " + (process.env.port || port));
