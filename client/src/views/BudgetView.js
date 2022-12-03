import React from 'react';
import AddBudget from "../components/AddBudget";


function BudgetView(props) {
    return (
        <div className="BudgetView">
       <AddBudget budget={props.budget}  />
        </div>
    );
}

export default BudgetView;


//