import React, { useState } from "react";
import "./AddBudget.css";

const BLANK_FORM= {
    amount: "",
};

function AddBudget(props){
    const [formData, setFormData] =useState(BLANK_FORM);

    function handleSubmit(event){
        event.preventDefault();
        props.newBudgetCb(formData);
        // setFormData(BLANK_FORM);   don't want to reset the form
    }


    function handleChange(event){
        let { name, value } = event.target;
        setFormData (data => ({...data, [name]: value}));
    }



    return(

        <div className="BudgetView">
            <h2>Set your budgets!</h2>
            <h3> Categories </h3>

        <form className="AddBudget" onSubmit={handleSubmit}>
            <ul>
                <li>
            <label>
                Rent & Utilities
                {" "}
                <input
                type= "number"
                name="amount1"
                value={formData.amount1}
                onChange={handleChange}
                />
                {" "}
                <button type="submit">Set</button>
            </label>
                </li>

                <li>
            <label>
                Food
                {" "}
                <input
                type= "number"
                name="amount2"
                value={formData.amount2}
                onChange={handleChange}
                />
                  {" "}
                <button type="submit">Set</button>
            </label>
                </li>

                <li>
            <label>
                Personal
                {" "}
                <input
                type= "number"
                name="amount3"
                value={formData.amount3}
                onChange={handleChange}
                />
                  {" "}
                <button type="submit">Set</button>
            </label>
                </li>

                <li>
            <label>
                Transportation
                {" "}
                <input
                type= "number"
                name="amount4"
                value={formData.amount4}
                onChange={handleChange}
                />
                  {" "}
                <button type="submit">Set</button>
            </label>
                </li>

                <li>
            <label>
                Other
                {" "}
                <input
                type= "number"
                name="amount5"
                value={formData.amount5}
                onChange={handleChange}
                />
                  {" "}
                <button type="submit">Set</button>
            </label>
                </li>

                <li>
            <label>
                Savings
                {" "}
                <input
                type= "number"
                name="amount6"
                value={formData.amount6}
                onChange={handleChange}
                />
                  {" "}
                <button type="submit">Set</button>
            </label>
                </li>

                <li>
            <label>
                Emergency
                {" "}
                <input
                type= "number"
                name="amount7"
                value={formData.amount7}
                onChange={handleChange}
                />
                  {" "}
                <button type="submit">Set</button>
            </label>
                </li>
            </ul>
        </form>

        </div>
    )
}

export default AddBudget;