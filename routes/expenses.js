var express = require('express');
var router = express.Router();
const db = require("../model/helper")

//get expenses data
  router.get("/", function (req, res) {
    db ("SELECT * FROM expenses;")
    .then(results => {
    res.send(results.data);
    })
    .catch(err=> res.status(500).send(err));
    });


 //get all expenses data from 1 user
 router.get("/:id", async function (req, res) {
    let id = req.params.id;
    
    try {
    let result = await db(`SELECT * FROM expenses WHERE userid = ${id}`);
  
      if (result.data.length === 0) {
      res.status(404).send({error: "User does not exist"});
      } else {
      res.send(result.data);
      }
    } catch(err) {
    res.status(500).send({error: err.message});
    }
    });

//get all expenses from 1 user in 1 month
router.get("/:id/:month/", async function (req, res) {
    let id = req.params.id;
    let month = req.params.month;
    
    try {
    let result = await db(`SELECT * FROM expenses WHERE userid=${id} AND themonth="${month}"`);
  
      if (result.data.length === 0) {
      res.status(404).send({error: "User does not exist"});
      } else {
      res.send(result.data);
      }
    } catch(err) {
    res.status(500).send({error: err.message});
    }
    });






  module.exports = router;