import React, { useState, useEffect } from "react";
import "./UserDashboard.css";


function UserDashboard(props){
                                            //or empty array  .amount
// const [sumExpenses, setSumExpenses] = useState(props.expenses);
// const [sumBudget, setSumBudget] = useState(props.sumBudget.amount);

useEffect(() => {
    leftover(props.sumBudget, props.sumMonthExpenses);
}, []);

    function leftover(a, b) {
        return (a - b)
    }

    // console.log(leftover(Object.values(props.sumBudget), Object.values(props.sumMonthExpenses)));

    return (

        <div className="dashboard">


            <h2> My Dashboard </h2>
            <div className = "row">
                <div className="col-sm-4">
                <div className="card">
                    <img src="https://media.istockphoto.com/vectors/piggy-bank-vector-id983438172?k=20&m=983438172&s=170667a&w=0&h=jHNPxW-0NCZD5MM_PfTu78kG50qFCyuSxhA377pvCHs=" className="card-img-top" alt="piggybank"/>
                    <div className="card-body">
                        <h5 className="card-title">Total Monthly Budget</h5>
                        <p className="card-text"> ${Object.values(props.sumBudget)} </p>
                </div>
                </div>
                </div>

                
                <div className="col-sm-4"> 
                <div className="card">
                    <img src="https://media.istockphoto.com/vectors/many-bank-cards-in-one-hand-vector-id1128868969?k=20&m=1128868969&s=612x612&w=0&h=Faxjl8SsDLzAgCFiIodnqigborUKgKLlYzPKCvkkTJ4=" className="card-img-top" alt="card"/>
                    <div className="card-body">
                        <h5 className="card-title">Total Monthly Expenses</h5>
                        <p className="card-text"> ${Object.values(props.sumMonthExpenses)} </p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
                </div>
                
                
                <div className="col-sm-4"> 
                <div className="card">
                    <img src="https://img.freepik.com/free-vector/money-bag-background-design_1270-41.jpg?w=360" className="card-img-top" alt="money"/>
                    <div className="card-body">
                        <h5 className="card-title">Difference</h5>
                        <p className="card-text" > $ {leftover(Object.values(props.sumBudget), Object.values(props.sumMonthExpenses))} </p>
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




