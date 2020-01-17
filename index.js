const express = require("express");
const bodyParser = require("body-parser");
//setup express app
const app = express();
app.use(bodyParser.json());
//initialize routes
app.use("/api", require("./routes/api"));

//listen for requests
app.listen(process.env.port || 4000, () =>
  console.log(`listening on port 4000!`)
);
