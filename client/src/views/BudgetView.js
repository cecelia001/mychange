import React from 'react';
import AddBudget from "../components/AddBudget";


function BudgetView(props) {
    return (
        <div className="BudgetView">
       <AddBudget newBudgetCb={props.newBudgetCb} resetBudgetCb={props.resetBudgetCb} budget={props.budget} setSumBudget={props.setSumBudget} sumBudget={props.sumBudget} />
        </div>
    );
}

export default BudgetView;


//