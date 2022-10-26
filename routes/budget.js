var express = require('express');
var router = express.Router();
const db = require("../model/helper")

//get budget data
  router.get("/", function (req, res) {
    db ("SELECT * FROM budget;")
    .then(results => {
    res.send(results.data);
    })
    .catch(err=> res.status(500).send(err));
    });
  

  //get all budget data from 1 user
  router.get("/:id", async function (req, res) {
    let id = req.params.id;
    
    try {
    let result = await db(`SELECT * FROM budget WHERE userid = ${id}`);
  
      if (result.data.length === 0) {
      res.status(404).send({error: "User does not exist"});
      } else {
      res.send(result.data);
      }
    } catch(err) {
    res.status(500).send({error: err.message});
    }
    });

//POST add new budget amount  **LEFT JOIN??????? CATEGORY ID AND USER ID
router.post("/", async function(req, res) {
    let { amount1, amount2, amount3, amount4, amount5, amount6, amount7} = req.body;
  
    let sql = `
      INSERT INTO budget (categoryid, amount, userid)
      VALUES (1, ${amount1}, 1), (2, ${amount2}, 1), (3, ${amount3}, 1), (4, ${amount4}, 1), (5, ${amount5}, 1), (6, ${amount6}, 1), (7, ${amount7}, 1);
      `;
  
    try {
      await db(sql); //INSERT new budget
      let result = await db(`SELECT * FROM budget`); //select and return updated student list
      res.status(201).send(result.data);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });

  //PUT new budget amount
  //if have time can go back to do this part, if not, user will only be able to delete budget amount and the add a new one


  //DELETE budget amount
  router.delete("/:id/:cid/", async function(req, res) {
    let id = req.params.id;
    let cid = req.params.cid;   

    try {
      //Check for existence of budget
      let result = await db(`SELECT * FROM budget WHERE categoryid=${cid} AND userid=${id}`);
      if (result.data.length === 0) {
        res.status(404).send({ error: "Category not found" });
      } else {
        //delete student
        let sql = `DELETE FROM budget WHERE categoryid=${cid} AND userid=${id}`;
        // }
        await db(sql);
        result = await db(`SELECT * FROM budget`);
        //return the updated list
        res.status(201).send(result.data);
      }
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });


  module.exports = router;
  