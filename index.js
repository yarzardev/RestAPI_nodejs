const express = require("express");
//setup express app
const app = express();

//initialize routes
app.use("/api", require("./routes/api"));

//listen for requests
app.listen(process.env.port || 4000, () =>
  console.log(`listening on port 4000!`)
);
