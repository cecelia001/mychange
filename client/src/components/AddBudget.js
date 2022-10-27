import React, { useState } from "react";
import "./AddBudget.css";

// const RESET_FORM= {
//     categoryid: 1,
//     amount: "",
//     userid: 1
// }


function AddBudget(props){
    // {props.budget}

    const [formData, setFormData] = useState(props.budget);
    // const [resetFormData, setResetFormData] = useState(RESET_FORM)

    

    function handleSubmit(event){
        event.preventDefault();
        props.newBudgetCb(formData);
        // setFormData(BLANK_FORM); 
    }

    function handleChange(event){
        event.preventDefault();
        // let { name, value } = event.target;
        // setFormData (data => ({...data, [name]: value}));
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
                value={formData[0].amount}
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
                value={formData[1].amount}
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
                value={formData[2].amount}
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
                value={formData[3].amount}
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
                value={formData[4].amount}
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
                value={formData[5].amount}
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
                value={formData[6].amount}
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