import React, { useState } from "react";
import "./AddBudget.css";


const BLANK_FORM = {
    category: "",
    amount: null,
    userid: 1
}


function AddBudget(props){

    const [formData, setFormData] = useState(props.budget);


    function handleSubmit(event){
        event.preventDefault();
        props.newBudgetCb(formData);
        // setFormData(); 
    }

    function handleChange(event){
        // event.preventDefault();
        let { name, value } = event.target;
        setFormData (data => ({...data, [name]: value}));
    }


    return (

        
        <div className="BudgetView">
            <h2>Set your budgets!</h2>
            <h3> Categories </h3>
        
        <form className="AddBudget" onSubmit={handleSubmit} >
            <ul>
                <li>
            <label>
                Rent & Utilities
                {" "}
                <input
                type= "number"
                name="rentandutilities"
                value={formData.rentandutilities}   
                onChange={handleChange}
                />
               
            </label>
                </li>

                <li>
            <label>
                Food
                {" "}
                <input
                type= "number"
                name="food"
                placeholder={props.budget[1].amount}
                value={formData.food}
                onChange={handleChange}
                />
             
            </label>
                </li>

                <li>
            <label>
                Personal
                {" "}
                <input
                type= "number"
                name="personal"
                placeholder={props.budget[2].amount}
                value={formData.personal}
                onChange={handleChange}
                />
              
            </label>
                </li>

                <li>
            <label>
                Transportation
                {" "}
                <input
                type= "number"
                name="transportation"
                placeholder={props.budget[3].amount}
                value={formData.transportation}
                onChange={handleChange}
                />

            </label>
                </li>

                <li>
            <label>
                Other
                {" "}
                <input
                type= "number"
                name="other"
                placeholder={props.budget[4].amount}
                value={formData.other}
                onChange={handleChange}
                />

            </label>
                </li>

                <li>
            <label>
                Savings
                {" "}
                <input
                type= "number"
                name="savings"
                placeholder={props.budget[5].amount}
                value={formData.savings}
                onChange={handleChange}
                />

            </label>
                </li>

                <li>
            <label>
                Emergency
                {" "}
                <input
                type= "number"
                name="emergency"
                placeholder={props.budget[6].amount}
                value={formData.emergency}
                onChange={handleChange}
                />

            </label>
                </li>
                </ul>
            
                <button type="submit">Submit</button>

        </form>

        </div>
    )
}

export default AddBudget;