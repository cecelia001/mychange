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

//POST new expense  FIX THIS!!!!!!!!!!!!!!!!!!!!! 
router.post("/", async function(req, res) {
  let { amount1, amount2, amount3, amount4, amount5, amount6, amount7} = req.body;

  let sql = `
    INSERT INTO expenses (categoryid, amount, userid)
    VALUES (1, ${amount1}, 1), (2, ${amount2}, 1), (3, ${amount3}, 1), (4, ${amount4}, 1), (5, ${amount5}, 1), (6, ${amount6}, 1), (7, ${amount7}, 1);
    `;

  try {
    await db(sql); //INSERT new expense
    let result = await db(`SELECT * FROM expenses`); //select and return updated student list
    res.status(201).send(result.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});




  module.exports = router;