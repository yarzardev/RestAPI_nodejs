const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//setup express app
const app = express();

//connect to mongo db
mongoose.connect("mongodb://localhost/ninjago");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
//initialize routes
app.use("/api", require("./routes/api"));

//listen for requests
app.listen(process.env.port || 4000, () =>
  console.log(`listening on port 4000!`)
);
