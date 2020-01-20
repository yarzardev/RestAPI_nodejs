const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//setup express app
const app = express();

//connect to mongo db
mongoose.connect("mongodb://localhost/ninjago");
mongoose.Promise = global.Promise;

app.use(express.static("public"));

app.use(bodyParser.json());
//initialize routes
app.use("/api", require("./routes/api"));

//error handling
app.use(function(err, req, res, next) {
  // console.log(err);
  res.status(422).send({ error: err.message });
});

//listen for requests
app.listen(process.env.port || 4000, () =>
  console.log(`listening on port 4000!`)
);
