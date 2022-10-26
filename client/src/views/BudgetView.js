import React from 'react';
import AddBudget from "../components/AddBudget";


function BudgetView(props) {
    return (
        <div className="BudgetView">
       <AddBudget newBudgetCb={props.newBudgetCb}/>
        </div>
    );
}

export default BudgetView;