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

//sum of all budgets for dashboard  
router.get("/:id/sum", async function (req, res) {
  let id = req.params.id;
  
  try {
  let result = await db(`SELECT SUM(amount) FROM budget WHERE userid=${id};`);

    if (result.data.length === 0) {
    res.status(404).send({error: "User does not exist"});
    } else {
    res.send(result.data[0]);
    }
  } catch(err) {
  res.status(500).send({error: err.message});
  }
  });

//POST add new budget amount  
router.post("/", async function(req, res) {
    let { categoryid, amount, userid } = req.body;
  
    let sql = `
      INSERT INTO budget (categoryid, amount, userid)
      VALUES (${categoryid}, ${amount}, ${userid});
      `;
  
    try {
      await db(sql); //INSERT new budget
      let result = await db(`SELECT * FROM budget`); //select and return updated student list
      res.status(201).send(result.data);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });


//   router.post("/", async function(req, res) {
// //select first
// try {
//   let result = await db(`SELECT * FROM budget WHERE userid = ${id} AND amount = null`);
//     // if (result.data.length === 0) {
//     // res.status(404).send({error: "User does not exist"});
//     // } else {
//     // res.send(result.data);
//     // }
  
//     let 
  
//     //if db(SELECT * FROM budget WHERE amount = null)`
  




//     let { categoryid, amount, userid } = req.body;
  
//     let sql = `
//       INSERT INTO budget (categoryid, amount, userid)
//       VALUES (${categoryid}, ${amount}, ${userid});
//       `;
  
//     try {
//       await db(sql); //INSERT new budget
//       let result = await db(`SELECT * FROM budget`); //select and return updated student list
//       res.status(201).send(result.data);
//     } catch (err) {
//       res.status(500).send({ error: err.message });
//     }
//   });







  //PUT new budget
  router.put("/:userid", async function(req, res) {
    // let id = req.params.userid;
    let { categoryid, amount, userid } = req.body;

      try {
        let result = await db(`SELECT * FROM budget WHERE categoryid=${categoryid} AND userid = ${userid}`); 
        if (result.data.length === 0) {
          res.status(404).send({ error: "User not found" });
        } else {
          let sql = `
            UPDATE budget
            SET categoryid = ${categoryid},
            amount = ${amount}
            WHERE userid= ${userid} AND categoryid=${categoryid};        
          `;
          await db(sql); 
          result = await db(`SELECT * FROM budget`);
          res.send(result.data);
        }
      } catch (err) {
        res.status(500).send({ error: err.message });
      }
    });


  //DELETE budget amount //wON"T NEED THIS BECAUSE WILL JUST UPDATE ALL VALUES
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
  