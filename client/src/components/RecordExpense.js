import React, { useState, useEffect } from "react";
import "./RecordExpense.css";

const BLANK_FORM= {
    amount: "",
    categoryid: null,
    themonth: "",
    theyear: ""
};

function RecordExpense(props){
    const [formData, setFormData] = useState(BLANK_FORM);

    function handleSubmit(event){
        event.preventDefault();
        props.addExpenseCb(formData);
        setFormData(BLANK_FORM);
    }


    function handleChange(event){
        let { name, value } = event.target;
        setFormData (data => ({...data, [name]: value}));
    }



    return(
        <div> 
        <form className="RecordExpense" onSubmit={handleSubmit}>
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
                Category
                <select
                name="categoryid"
                onChange={handleChange}
                value= {formData}
                >
                <option selected value="Select"> {" "} Select{" "}</option>
                <option value="1"> Rent & Utilities</option>
                <option value="2"> Food</option>
                <option value="3"> Personal</option>
                <option value="4"> Transportation</option>
                <option value="5"> Other</option>
                <option value="6"> Savings</option>
                <option value="7"> Emergency</option>
                </select>
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


            <button type="submit">Submit</button>

            </form>

            <h3>
                Past Expenses


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
    
            </h3>
</div>
    )
}

export default RecordExpense;