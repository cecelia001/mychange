import React, { useState } from "react";
import "./RecordExpense.css";

const BLANK_FORM= {
    amount: "",
    categoryid: ""
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
        <form className="RecordExpense" onSubmit={handleSubmit}>
            <label>
                Amount
                <input
                type= "number"
                name="username"
                value={formData.username}
                onChange={handleChange}
                />
            </label>

            <label>
                Category
                <select
                onChange={handleChange}
                name="category"
                >
                <option value="1"> Rent & Utilities</option>
                <option value="2"> Food</option>
                <option value="3"> Personal</option>
                <option value="4"> Transportation</option>
                <option value="5"> Other</option>
                <option value="6"> Savings</option>
                <option value="7"> Emergency</option>
                <option selected value>
                    {" "}
                    Select{" "}
                </option>
                </select>
            </label>
            <button type="submit">Submit</button>

            <h3>
                Past Expenses
            </h3>


        </form>
    )
}

export default RecordExpense;