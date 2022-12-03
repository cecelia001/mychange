var express = require('express');
const { restart } = require('nodemon');
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
  

//sum of all budgets for dashboard  
router.get("/sum", async function (req, res) { 
  try {
  let result = await db(`SELECT SUM(amount) FROM budget;`);
    if (result.data.length === 0) {
    res.status(404).send({error: "Sum not available"});
    } else {
    res.send(result.data[0]);
    }
  } catch(err) {
  res.status(500).send({error: err.message});
  }
  });


//POST new budget
router.post("/", async function (req, res){
  let { categoryid, amount } = req.body;

  let sql = `
    INSERT INTO budget (categoryid, amount)
    VALUES ( ${categoryid}, ${amount} ); 
    `;
try{
  await db(sql);
  let result = await db (`SELECT * FROM budget`)
  res.status(201).send(result.data)
;} catch(err) {
  res.status(500).send({error: err.message});
}
});


  //PUT new budget
  // router.put("/:userid", async function(req, res) {
  //   let budgetArr = req.body;
  //   let userid = req.params.userid
  //   // let { categoryid, amount, userid } = req.body;

  //     try {
  //       let result = await db(`SELECT * FROM budget WHERE userid = 1`); 
  //       if (result.data.length === 0) {
  //         res.status(404).send({ error: "User not found" });
  //       } else {
  //         for (let c of budgetArr) {
  //           let sql = `
  //             UPDATE budget
  //             SET amount = ${c.amount}
  //             WHERE userid= ${c.userid} AND categoryid=${c.categoryid};        
  //           `
  //         await db(sql); 
  //         }
  //         result = await db(`SELECT * FROM budget WHERE userid = ${userid}`);
  //         res.send(result.data);
          
  //       }
  //     } catch (err) {
  //       res.status(500).send({ error: err.message });
  //     }
  //   });


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
  