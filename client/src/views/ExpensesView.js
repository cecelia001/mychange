import React from 'react';
import RecordExpense from "../components/RecordExpense";



function ExpensesView(props) {
    return (
        <div className="ExpensesView">
            
            <RecordExpense addExpenseCb= {props.addExpenseCb} expenses={props.expenses} setSumMonthExpenses ={props.setSumMonthExpenses} sumMonthExpenses={props.sumMonthExpenses} />

        </div>
    );
}

export default ExpensesView;