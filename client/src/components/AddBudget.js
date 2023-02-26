import React, { useState, useEffect} from "react";
import "./AddBudget.css";


function AddBudget(props){

    const [formData, setFormData] = useState(toNewFormat(props.budget)); 
    const [showConfirm, setShowConfirm] = useState(false)

 
    // Create and return an obj of format category: amount
    function toNewFormat() {
        let newFormat = {};
        for (let bItem of props.budget) {
            newFormat[bItem.categoryName] = bItem.amount;
        }
        return newFormat;
    }

    
    // Return budget data back to original format for submitting
    function toOldFormat() {
        let oldFormat = [];
        for (let bItem of props.budget) {
            let bItemCopy = {...bItem};
            bItemCopy.amount = Number(formData[bItem.categoryName]);
            oldFormat.push(bItemCopy);
        }
        return oldFormat;
    }

    function handleSubmit(event){
        event.preventDefault();
        let oldFormat = toOldFormat();  
        props.newBudgetCb(oldFormat);
        setShowConfirm(true);
        setFormData(props.budget);
        // props.setSumBudget(toOldFormat(props.budget[0]['amount']));  //trying to get setSumMonth in dashboard to update without refreshing, not completed!!! won't work since it is an array
    }

    function handleChange(event){
        // event.preventDefault();
        let { name, value } = event.target;
        setFormData(data => ({...data, [name]: value}));
    }


    return (
        <div className="BudgetView">
        
            <h3> Set and adjust your monthly budgets.</h3>
                
            <div className= "row">
                <div className = "column" >
                    <img src = "https://mommanagingchaos.com/wp-content/uploads/2021/11/budgeting-quotes-1024x1024.webp"/>
                </div>

                <div className = "column" >
                    <form className="AddBudget" onSubmit={handleSubmit} >
                        <ul>

                            <li>
                                <div className="spacing"></div>
                                <label>
                                    Rent & Utilities
                                    <input
                                        type= "number"
                                        name ="rentandutilities"
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
                                        value={formData.emergency}
                                        onChange={handleChange}
                                    />
                                </label>
                            </li>
                        
                        </ul>
                        
                        <button type="submit" className="btn btn-secondary">Submit</button>

                        {showConfirm && (
                            <div className="alert alert-success">
                            <strong>Success!</strong> Budgets have been updated.
                            </div>
                        )}

                        <div className="spacing"></div>  

                    </form>
                </div>
            </div>
        </div>
    )}

export default AddBudget;