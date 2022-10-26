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
  let [expenses, setExpenses] = useState([]);


  useEffect(() => {
    getUsers();
    getExpenses();
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

//New User (POST new budget)
  async function newBudget(amount){
  
        let options= {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(amount)
    };

    try {
      let response = await fetch("/budget", options); // do POST
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
  

  //New User (POST new expense)
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


  async function getExpenses() {
    try {
      let response = await fetch("/expenses/1"); //GET
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        setExpenses(data);
        console.log(expenses);
        console.log(data);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  } 


  // //Get All expenses from one user
  // async function expenseList(){

  //   try {
  //   let response = await fetch("/expenses/:id"); 
  //   if (response.ok) {
  //     let data = await response.json();    //awaiting new data, if found post
  //     setExpenses(data);
  //   } else {
  //     console.log(`Server error: ${response.status} ${response.statusText}`);
  //   }
  //   } catch (err) {
  //   console.log(`Network error: ${err.message}`);
  //   }
  // }


  return (
    <div className="App">
      <h1> myChange </h1>
      <Navbar />
      
            <Routes>
                <Route path="/" element={<HomeView  />} />
                <Route path="/budget" element={<BudgetView newBudgetCb={newBudget }/>} />
                <Route path="/expenses" element={<ExpensesView addExpenseCb= {addExpense}  expenses={expenses} />} />
                <Route path="*" element={<Error404View />} />
            </Routes>
  
  
    </div>
  );
}

export default App;
