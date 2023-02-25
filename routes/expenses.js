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


//calculate the sum of expenses from 1 user in 1 month //dashboard
router.get("/sum/", async function (req, res) {

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const d = new Date();
  let monthName = month[d.getMonth()];

  let sql = `
      SELECT expenses.*, category.*
      FROM expenses
      LEFT JOIN category ON expenses.categoryid = category.categoryid
      WHERE themonth="${monthName}";`
  try {
  let result = await db(sql);

    if (result.data.length === 0) {
    res.status(404).send({error: "Month does not exist"});
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
    INSERT INTO expenses (categoryid, amount, themonth, theyear)
    VALUES (${categoryid}, ${amount}, '${themonth}', ${theyear});
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