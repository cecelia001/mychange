import React, { useState } from "react";
import "./NewUserForm.css";

const BLANK_FORM= {
    username: "",
    password: ""
};

function NewUserForm(props){
    const [formData, setFormData] =useState(BLANK_FORM);

    function handleSubmit(event){
        event.preventDefault();
        props.newUserCb(formData);
        setFormData(BLANK_FORM);
    }


    function handleChange(event){
        let { name, value } = event.target;
        setFormData (data => ({...data, [name]: value}));
    }



    return(
        <form className="NewUserForm" onSubmit={handleSubmit}>
            <label>
                Username
                <input
                type= "text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                />
            </label>
            
            <label>
                Password
                <input
                type= "text"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
            </label>



        </form>
    )
}

export default NewStudentForm;