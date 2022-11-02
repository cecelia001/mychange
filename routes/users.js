//Didn't use, didn't get to add multiple users


// var express = require('express');
// var router = express.Router();
// const db = require("../model/helper")

// /* GET users listing. */
// router.get("/", function (req, res) {
//   db ("SELECT * FROM users;")
//   .then(results => {
//   res.send(results.data);
//   })
//   .catch(err=> res.status(500).send(err));
//   });
  


// //Get one user
// router.get("/:id", async function (req, res) {
//   let id = req.params.id;
  
//   try {
//   let result = await db(`SELECT * FROM users WHERE id = ${id}`);

//     if (result.data.length === 0) {
//     res.status(404).send({error: "User does not exist"});
//     } else {
//     res.send(result.data[0]);
//     }
//   } catch(err) {
//   res.status(500).send({error: err.message});
//   }
//   });
  

  //new user if have time for this featurea
  // router.post("/", async function(req, res) {
  //   let { username, password, income } = req.body;
  
  //   let sql = `
  //     INSERT INTO users (username, pswd, income)
  //     VALUES ('${username}', '${password}', ${income})
  //     `;
  
  //   try {
  //     await db(sql); 
  //     let result = await db(`SELECT * FROM users`);
  //     res.status(201).send(result.data);
  //   } catch (err) {
  //     res.status(500).send({ error: err.message });
  //   }
  // });



  module.exports = router;
