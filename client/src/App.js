import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import "./App.css";


import Navbar from './components/Navbar';

import HomeView from './views/HomeView';
import ExpensesView from './views/ExpensesView';
import BudgetView from './views/BudgetView';
import Error404View from './views/Error404View';


function App() {

  let [budget, setBudget] = useState([]);
  let [expenses, setExpenses] = useState([]);
  let [sumMonthExpenses, setSumMonthExpenses] = useState(); //dashboard & Expenses View
  let [sumBudget, setSumBudget] = useState();     //dashboard

  useEffect(() => {
    // getUsers();
    getExpenses();
    getBudget();
    getBudgetTotal();
    getMonthExpensesTotal();
  }, []);

  // async function getUsers() (not needed because only 1 user at the moment) {
  //   try {
  //     let response = await fetch("/users"); //GET
  //     if (response.ok) {
  //       let users = await response.json();
  //       setUsers(users);
  //     } else {
  //       console.log(`Server error: ${response.status} ${response.statusText}`);
  //     }
  //   } catch (err) {
  //     console.log(`Network error: ${err.message}`);
  //   }
  // } 

//GET Budget obj from user 1 (AddBudget.js)
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
  

  //PUT reset budget (AddBudget.js)
  async function newBudget(amount){
  
  let options= {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(amount)
};

try {
  let response = await fetch("/budget/1", options); 
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


  //POST new expense (RecordExpense.js)
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
      setExpenses(data);
    } else {
      console.log(`Server error: ${response.status} ${response.statusText}`);
    }
    } catch (err) {
    console.log(`Network error: ${err.message}`);
    }
  }

//get all expenses from User 1 (RecordExpense.js)
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

  //monthly budget (UserDashboard.js)
  async function getBudgetTotal() {
    try {
      let response = await fetch("/budget/1/sum"); //does GET by default
      if (response.ok) {
        let data = await response.json();
        setSumBudget(data["SUM(amount)"]);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server error: ${err.message}`);
    }
  }

    //monthly expenseTotal (UserDashboard.js)
  async function getMonthExpensesTotal() {
    try {
      let response = await fetch("/expenses/1/sum/October"); 
      // console.log(response);
      if (response.ok) {
        let data = await response.json();
        setSumMonthExpenses(data["SUM(amount)"]);
        // console.log(data["SUM(amount)"]);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  }



  return (
    <div className="App">
      <h1> my₵hange </h1>
      {/* <img src="https://www.pngkey.com/png/detail/334-3345806_this-is-a-picture-of-a-dollar-sign.png" alt="This Is A Picture Of A Dollar Sign Symbol Surrounded - Money Logo Transparent@pngkey.com" /> */}
      <Navbar />
      
            <Routes>
                <Route path="/" element={<HomeView expenses={expenses} sumBudget={sumBudget} sumMonthExpenses ={sumMonthExpenses}/>} />
                <Route path="/budget" element={<BudgetView newBudgetCb={newBudget} budget={budget} setSumBudget={setSumBudget} sumBudget={sumBudget}/>} />
                <Route path="/expenses" element={<ExpensesView addExpenseCb= {addExpense}  expenses={expenses} setSumMonthExpenses ={setSumMonthExpenses} sumMonthExpenses={sumMonthExpenses}/>} />
                <Route path="*" element={<Error404View />} />
            </Routes>
  
  
    </div>
  );
}

export default App;
