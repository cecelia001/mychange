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
  // router.get("/", async function (req, res) {
  //   try {
  //   let result = await db(`
  //       SELECT category.*, budget.amount, budget.userid
  //       FROM category
  //       LEFT JOIN budget ON category.categoryid = budget.categoryid;
  //       `);
  
  //     if (result.data.length === 0) {
  //     res.status(404).send({error: "User does not exist"});
  //     } else {
  //     res.send(result.data);
  //     }
  //   } catch(err) {
  //   res.status(500).send({error: err.message});
  //   }
  //   });

//sum of all budgets for dashboard  
router.get("/sum", async function (req, res) {
  
  try {
  let result = await db(`SELECT SUM(amount) FROM budget`);
    if (result.data.length === 0) {
    res.status(404).send({error: "User does not exist"});
    } else {
    res.send(result.data[0]);
    }
  } catch(err) {
  res.status(500).send({error: err.message});
  }
  });


  //PUT new budget
  router.put("/", async function(req, res) {
    let budgetArr = req.body;

      try {
        let result = await db(`SELECT * FROM budget`); 
        if (result.data.length === 0) {
          res.status(404).send({ error: "User not found" });
        } else {
          for (let c of budgetArr) {
            let sql = `
              UPDATE budget
              SET amount = ${c.amount}
              WHERE categoryid=${c.categoryid};        
            `
          await db(sql); 
          }
          result = await db(`SELECT * FROM budget`);
          res.send(result.data);
          
        }
      } catch (err) {
        res.status(500).send({ error: err.message });
      }
    });


  //DELETE budget amount //WON'T NEED THIS BECAUSE WILL JUST UPDATE ALL VALUES
  // router.delete("/:id/:cid/", async function(req, res) {
  //   let id = req.params.id;
  //   let cid = req.params.cid;   

  //   try {
  //     //Check for existence of budget
  //     let result = await db(`SELECT * FROM budget WHERE categoryid=${cid} AND userid=${id}`);
  //     if (result.data.length === 0) {
  //       res.status(404).send({ error: "Category not found" });
  //     } else {
  //       //delete student
  //       let sql = `DELETE FROM budget WHERE categoryid=${cid} AND userid=${id}`;
  //       // }
  //       await db(sql);
  //       result = await db(`SELECT * FROM budget`);
  //       //return the updated list
  //       res.status(201).send(result.data);
  //     }
  //   } catch (err) {
  //     res.status(500).send({ error: err.message });
  //   }
  // });


  module.exports = router;
  