import React from 'react';
import RecordExpense from "../components/RecordExpense";



function ExpensesView(props) {
    return (
        <div className="ExpensesView">
            <h2>Record your expenses!</h2>
            <RecordExpense addExpenseCb= {props.addExpenseCb} expenses={props.expenses} />

        </div>
    );
}

export default ExpensesView;