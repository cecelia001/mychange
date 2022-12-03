import React, { useState, useEffect} from "react";
import "./AddBudget.css";


function AddBudget(props){

    const [formData, setFormData] = useState([]); 
    const [showConfirm, setShowConfirm] = useState(false)


//POST new budget amount

async function addBudget(amount){
    let options= {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(amount)
      };
  
      try {
      let response = await fetch("/budget", options); 
      if (response.ok) {
        let data = await response.json();    //awaiting new data, if found post
        props.setBudget(data);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
      } catch (err) {
      console.log(`Network error: ${err.message}`);
      }
    }
    

    function handleSubmit(event){
        event.preventDefault();
        setShowConfirm(true);
        addBudget(formData);
    }

    function handleChange(event){
        let { name, value } = event.target;
        setFormData (data => ({...data, [name]: value}));
    }


    return (

        
        <div className="BudgetView">
        
        <h3> Set and adjust your monthly budgets.</h3>
            
        <div className= "row">
            <div className = "column" >
                <img src = "https://mommanagingchaos.com/wp-content/uploads/2021/11/budgeting-quotes-1024x1024.webp"/>
            </div>
    


            <div className = "column" >
                <div className ="backgroundColor">
                <form className="AddBudget" onSubmit={handleSubmit} >

                <ul>
                    <li>

                    <div className="spacing"></div>
                
                <label>
                    Rent & Utilities
                    <input
                    type= "number"
                    name ="Rent"
                    value={formData.Rent}   
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
                    name="Food"
                    value={formData.Food}
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
                    name="Personal"
                    value={formData.Personal}
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
                    name="Transportation"
                    value={formData.Transportation}
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
                    name="Other"
                    value={formData.Other}
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
                    name="Savings"
                    value={formData.Savings}
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
                    name="Emergency"
                    value={formData.Emergency}
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
        </div>

    )
}

export default AddBudget;


// const [formData, setFormData] = useState(toNewFormat(props.budget)); 
// const [showConfirm, setShowConfirm] = useState(false)



// // Create and return an obj of format category: amount
// function toNewFormat() {
//     let newFormat = {};
//     for (let bItem of props.budget) {
//         newFormat[bItem.categoryName] = bItem.amount;
//     }

//     return newFormat;
// }


// // Return budget data back to original format for submitting
// function toOldFormat() {
//     let oldFormat = [];
//     for (let bItem of props.budget) {
//         let bItemCopy = {...bItem};
//         bItemCopy.amount = Number(formData[bItem.categoryName]);
//         oldFormat.push(bItemCopy);
//     }

//     return oldFormat;
// }

// function handleSubmit(event){
//     event.preventDefault();
//     let oldFormat = toOldFormat();  
//    // console.log('submit', oldFormat);
//     props.newBudgetCb(oldFormat);
//     setShowConfirm(true);
//     setFormData(props.budget);
//     // props.setSumBudget(toOldFormat(props.budget[0]['amount']));  //trying to get setSumMonth in dashboard to update without refreshing, not completed!!! won't work since it is an array
// }