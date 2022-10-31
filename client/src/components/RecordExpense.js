import React, { useState, useEffect } from "react";
import "./RecordExpense.css";

const BLANK_FORM= {
    amount: "",
    categoryid: "",
    themonth: "",
    theyear: ""
};

function RecordExpense(props){
    const [formData, setFormData] = useState(BLANK_FORM);

    function handleSubmit(event){
        event.preventDefault();
        props.addExpenseCb(formData);
        props.setSumMonthExpenses(props.sumMonthExpenses + +formData.amount);
        // console.log(props.sumMonthExpenses)
        setFormData(BLANK_FORM);
    }


    function handleChange(event){
        let { name, value } = event.target;
        setFormData (data => ({...data, [name]: value}));
    }



    return(
        <div> 

        <form className="RecordExpense" onSubmit={handleSubmit}>
        <h3>Record Expenses</h3>
        <h5>Enter the total monthly amount of expenses for each category.</h5>
           <li>
             <label>
                Amount
                <input 
                type= "number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                />
            </label>

            <label>
                Month
                <input
                type="text"
                name="themonth"
                value={formData.themonth}
                onChange={handleChange}
                />
            </label>

            <label>
                Year
                <input
                type= "number"
                name="theyear"
                value={formData.theyear}
                onChange={handleChange}
                />
            </label>
            </li>

            <li>
            <label> 
                Category
                <select
                name="categoryid"
                value= {formData.categoryid}
                onChange={handleChange}
                >
                <option defaultValue="Select"> Select</option>
                {/* <option selected value="Select"> Select</option> */}
                <option value="1"> Rent & Utilities</option>
                <option value="2"> Food</option>
                <option value="3"> Personal</option>
                <option value="4"> Transportation</option>
                <option value="5"> Other</option>
                <option value="6"> Savings</option>
                <option value="7"> Emergency</option>
                </select>
            </label>
            </li>

            <div className="spacing"> </div>
            <li>
            <button type="submit" className="btn btn-success" >Submit</button>
            </li>

            </form>
        
        <div className="spacing"></div>
        <div className="spacing"></div>

        <h3> Past Expenses </h3>

        <div className="spacing"></div>

        <div> 
    
            <table className="head">
            <thead>
                <tr>
                    <th> Amount </th>
                    <th> Category </th>
                    <th> Month </th>
                    <th> Year </th>
                
                </tr>
            </thead>
            </table>

        </div>
    
    <div> {props.expenses.map(e => (
        <li key={e.expensesid} >

            {/* {props.category.map(c => (
                <li key ={c.categoryid} > */}
            

        <table className ="list">


                <tbody>

                        <td>{`$ ${e.amount}`} </td>
                       
                        {/* <td>{c.categoryName}</td>  */}

                        <td>{e.categoryid}</td>
                        
                        <td>{e.themonth}</td> 
                       
                        <td>{e.theyear}</td>
                        
                </tbody>                 
            </table>
{/* </li>
))} */}
 

            </li>
            ))}
            </div>
    
        
</div>
    )
}

export default RecordExpense;