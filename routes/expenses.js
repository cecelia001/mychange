var express = require('express');
var router = express.Router();
const db = require("../model/helper")

//get expenses data
  router.get("/", async function (req, res) {
    let sql= `
      SELECT expenses.*, category.*
      FROM expenses
      LEFT JOIN category ON expenses.categoryid = category.categoryid;`
  try {
    let result = await db(sql);
  
      if (result.data.length === 0) {
      res.status(404).send({error: "User does not exist"});
      } else {
      res.send(result.data);
      }
    } catch(err) {
    res.status(500).send({error: err.message});
    }
    });

 //get all expenses data from 1 user
//  router.get("/:id", async function (req, res) {
//   let id = req.params.id;
//   let sql = `
//     SELECT expenses.*, category.*
//     FROM expenses
//     LEFT JOIN category ON expenses.categoryid = category.categoryid
//     WHERE expenses.userid = ${id};`;
//   try {
//   let result = await db(sql);

//     if (result.data.length === 0) {
//     res.status(404).send({error: "User does not exist"});
//     } else {
//     res.send(result.data);
//     }
//   } catch(err) {
//   res.status(500).send({error: err.message});
//   }
//   });


//calculate the sum of expenses from 1 user in 1 month //dashboard
router.get("/:id/sum/:month/", async function (req, res) {
  let id = req.params.id;
  let month = req.params.month;
  let sql = `
      SELECT expenses.*, category.*
      FROM expenses
      LEFT JOIN category ON expenses.categoryid = category.categoryid
      WHERE expenses.userid = ${id} and themonth="${month}";`
  try {
  let result = await db(sql);

    if (result.data.length === 0) {
    res.status(404).send({error: "User does not exist"});
    } else {
    res.send(result.data[0]);
    }
  } catch(err) {
  res.status(500).send({error: err.message});
  }
  });


//POST new expense 
router.post("/", async function(req, res) {
  let { categoryid, amount, themonth, theyear } = req.body;

  let sql = `
    INSERT INTO expenses (categoryid, amount, themonth, theyear, userid)
    VALUES (${categoryid}, ${amount}, '${themonth}', ${theyear}, 1);
    `;

  try {
    await db(sql); //INSERT new expense
    let result = await db(`SELECT * FROM expenses`); //select and return updated expense list
    res.status(201).send(result.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});






  module.exports = router;