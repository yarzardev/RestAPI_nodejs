const express = require("express");
const router = express.Router();
//get a list of ninjas from the db
router.get("/ninjas", (req, res) => {
  res.send({ type: "GET" });
});

//add a new ninja to db
router.post("/ninjas", (req, res) => {
  res.send({ type: "POST" });
});

//update a ninja in db
router.get("/ninjas/:id", (req, res) => {
  res.send({ type: "PUT" });
});

//delete a ninja from db
router.get("/ninjas/:id", (req, res) => {
  res.send({ type: "DELETE" });
});

module.exports = router;
