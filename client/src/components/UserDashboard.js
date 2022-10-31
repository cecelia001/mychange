import React, { useState, useEffect } from "react";
import "./UserDashboard.css";


function UserDashboard(props){
                                            //or empty array  .amount
// const [sumExpenses, setSumExpenses] = useState(props.expenses);
const [sumBudget, setSumBudget] = useState(props.sumBudget.amount);


//why isn't this working? I'm setting initial state to props.expenses and
//function is updating sumExpenses to sum from 1 month
//mapping below by everything from expenses is being mapped, not just the filtered month

    return (

        <div className="dashboard">
 
        {/* <ul>{sumBudget.map((sum) => (
            <li key={sum}>{sum}</li>
        ))}
            </ul> */}



            <h2> My Dashboard </h2>
            <div className = "row">
                <div className="col-sm-4">
                <div className="card">
                    <img src="https://media.istockphoto.com/vectors/piggy-bank-vector-id983438172?k=20&m=983438172&s=170667a&w=0&h=jHNPxW-0NCZD5MM_PfTu78kG50qFCyuSxhA377pvCHs=" className="card-img-top" alt="piggybank"/>
                    <div className="card-body">
                        <h5 className="card-title">Total Monthly Budget</h5>
                        <p className="card-text"> ${sumBudget} </p>
                </div>
                </div>
                </div>

                
                <div className="col-sm-4"> 
                <div className="card">
                    <img src="https://media.istockphoto.com/vectors/many-bank-cards-in-one-hand-vector-id1128868969?k=20&m=1128868969&s=612x612&w=0&h=Faxjl8SsDLzAgCFiIodnqigborUKgKLlYzPKCvkkTJ4=" className="card-img-top" alt="card"/>
                    <div className="card-body">
                        <h5 className="card-title">Total Monthly Expenses</h5>
                        <p className="card-text"> $ </p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
                </div>
                
                
                <div className="col-sm-4"> 
                <div className="card">
                    <img src="https://img.freepik.com/free-vector/money-bag-background-design_1270-41.jpg?w=360" className="card-img-top" alt="money"/>
                    <div className="card-body">
                        <h5 className="card-title">Left to Spend</h5>
                        <p className="card-text"> $ </p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
                </div>
                </div>
            
        </div>

    );
}

export default UserDashboard;

//compare this month to last month




