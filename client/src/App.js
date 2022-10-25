import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import "./App.css";


import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
// import ProfileView from './views/ProfileView';
import ExpensesView from './views/ExpensesView';
import BudgetView from './views/BudgetView';
import Error404View from './views/Error404View';


function App() {

  let [users, setUsers] = useState([]);


  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      let response = await fetch("/users"); //GET
      if (response.ok) {
        let users = await response.json();
        setUsers(users);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  } 


  return (
    <div className="App">
      <h1> myChange </h1>

      <Navbar />
      
            <Routes>
                <Route path="/" element={<HomeView users={users}  />} />
                <Route path="/budget" element={<BudgetView users={users}  />} />
                <Route path="/expenses" element={<ExpensesView users={users} />} />
                {/* <Route path="users/:id" element={<ProfileView users={users} />} /> */}
                {/* <Route path="add-user" element={<AddUserView addUserCb={name => addUser(name)} />} /> */}
                {/* <Route path="*" element={<Error404View />} /> */}
            </Routes>
    
    </div>
  );
}

export default App;
