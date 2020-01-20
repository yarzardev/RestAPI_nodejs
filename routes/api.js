const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");
//get a list of ninjas from the db
router.get("/ninjas", (req, res, next) => {
  // Ninja.find({}).then(function(ninjas) {
  //   res.send(ninjas);
  // });
  Ninja.aggregate()
    .near({
      near: {
        type: "Point",
        coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
      },
      maxDistance: 100000,
      spherical: true,
      distanceField: "dis"
    })
    .then(function(ninjas) {
      res.send(ninjas);
    });
});

//add a new ninja to db
router.post("/ninjas", (req, res, next) => {
  //   var ninja = new Ninja(req.body);
  //   ninja.save();
  Ninja.create(req.body)
    .then(function(ninja) {
      res.send(ninja);
    })
    .catch(next);
});

//update a ninja in db
router.put("/ninjas/:id", (req, res, next) => {
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
    Ninja.findOne({ _id: req.params.id }).then(function(ninja) {
      res.send(ninja);
    });
  });
});

//delete a ninja from db
router.delete("/ninjas/:id", (req, res, next) => {
  //res.send({ type: "DELETE" });
  Ninja.findByIdAndRemove({ _id: req.params.id }).then(function(ninja) {
    res.send(ninja);
  });
});

module.exports = router;
