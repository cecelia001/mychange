import React, { useState, useEffect } from "react";
import "./UserDashboard.css";


function UserDashboard(props){


    // async function sumBudget() {
    //     try {
    //       let response = await fetch("budget/1/sum");
    //       if (response.ok) {
    //         let data = await response.json();
    //         setBudgetView(data);
    //       } else {
    //         console.log(`Server error: ${response.status} ${response.statusText}`);
    //       }
    //     } catch (err) {
    //       console.log(`Network error: ${err.message}`);
    //     }
    //   } 

    //   async function getExpenses() {
    //     try {
    //       let response = await fetch("expenses/1/sum/:month");
    //       if (response.ok) {
    //         let data = await response.json();
    //         setExpenseView(data);
    //       } else {
    //         console.log(`Server error: ${response.status} ${response.statusText}`);
    //       }
    //     } catch (err) {
    //       console.log(`Network error: ${err.message}`);
    //     }
    //   }

    return (
        <div>
            {/* {budgetView["SUM(amount)"]} */}
            {/* {expenseView} */}
        </div>




    );
}

export default UserDashboard;


//add total expenses for the current month??

//Total budget - total monthly expenses = left to spend

//compare this month to last month

//
