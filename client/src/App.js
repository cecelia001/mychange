import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import "./App.css";


import Navbar from './components/Navbar';

import HomeView from './views/HomeView';
import ExpensesView from './views/ExpensesView';
import BudgetView from './views/BudgetView';
import Error404View from './views/Error404View';


function App() {

  let [users, setUsers] = useState([]);
  let [budget, setBudget] = useState([]);
  let [expenses, setExpenses] = useState([]);
  const [budgetView, setBudgetView] = useState([]);


  useEffect(() => {
    getUsers();
    getExpenses();
    getBudget();
  }, []);

  async function getUsers() {
    try {
      let response = await fetch("/users"); //GET
      if (response.ok) {
        let users = await response.json();
        setUsers(users);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  } 

//GET Budget obj
  async function getBudget() {
    try {
      let response = await fetch("budget/1");
      if (response.ok) {
        let data = await response.json();
        setBudget(data);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  } 

// //Edit budget amount (POST new budget)
  // async function newBudget(amount){
  // ///what to put in the if bracket??????????????????????????????????
  //   if( amount = 0){
  //     let options= {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(amount)
  //     };
  
  //     try {
  //       let response = await fetch("/budget", options); // do POST
  //       if (response.ok) {
  //         let data = await response.json();    //awaiting new data, if found post
  //         setBudget(data);
  //       } else {
  //         console.log(`Server error: ${response.status} ${response.statusText}`);
  //       }
  //     } catch (err) {
  //       console.log(`Network error: ${err.message}`);
  //     }

  //   } else {
  //       let options= {
  //         method: "PUT",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(amount)
  //       };

  //       try {
  //         let response = await fetch("/budget/1", options); // do PUT
  //         if (response.ok) {
  //           let data = await response.json();    //awaiting new data, if found post
  //           setBudget(data);
  //         } else {
  //           console.log(`Server error: ${response.status} ${response.statusText}`);
  //         }
  //       } catch (err) {
  //         console.log(`Network error: ${err.message}`);
  //       }
  //       }

  //   }




    //POST THAT WAS WORKING for budget
  //   async function newBudget(amount){
  //       let options= {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(amount)
  //   };

  //   try {
  //     let response = await fetch("/budget", options); // do POST
  //     if (response.ok) {
  //       let data = await response.json();    //awaiting new data, if found post
  //       setUsers(data);
  //     } else {
  //       console.log(`Server error: ${response.status} ${response.statusText}`);
  //     }
  //   } catch (err) {
  //     console.log(`Network error: ${err.message}`);
  //   }
  // }
  

  //PUT reset budget  (changed name was resetBudget)
  async function newBudget(amount){
  
    let options= {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(amount)
};

try {
  let response = await fetch("/budget/1", options); // do PUT
  if (response.ok) {
    let data = await response.json();    //awaiting new data, if found post
    setUsers(data);
  } else {
    console.log(`Server error: ${response.status} ${response.statusText}`);
  }
} catch (err) {
  console.log(`Network error: ${err.message}`);
}
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // async function saveBudget(amount){
  //   if (AMOUNT IN BUDGET SUM  =0 ){
  //     POST
  //   } else {
  //     PUT
  //   }
  // }


  //New expense (POST new expense)
  async function addExpense(amount){
    let options= {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(amount)
    };

    try {
    let response = await fetch("/expenses", options); // do POST
    if (response.ok) {
      let data = await response.json();    //awaiting new data, if found post
      setUsers(data);
    } else {
      console.log(`Server error: ${response.status} ${response.statusText}`);
    }
    } catch (err) {
    console.log(`Network error: ${err.message}`);
    }
  }

//get all expenses from User 1
  async function getExpenses() {
    try {
      let response = await fetch("/expenses/1"); //GET
      if (response.ok) {
        let data = await response.json();
        setExpenses(data);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  } 


  //count all expenses from user 1 for current month
  async function countExpenses() {
    try {
      let response = await fetch("/expenses/1/:month"); 
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        setExpenses(data);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  } 



  return (
    <div className="App">
      <h1> myChange </h1>
      <Navbar />
      
            <Routes>
                <Route path="/" element={<HomeView countExpensesCb={countExpenses} expenses={expenses} />} />
                <Route path="/budget" element={<BudgetView newBudgetCb={newBudget} budget={budget} />} />
                <Route path="/expenses" element={<ExpensesView addExpenseCb= {addExpense}  expenses={expenses} />} />
                <Route path="*" element={<Error404View />} />
            </Routes>
  
  
    </div>
  );
}

export default App;
