import React from 'react';
import UserDashboard from "../components/UserDashboard";


function HomeView(props) {
    return (
        <div className="HomeView">            
            <UserDashboard expenses={props.expenses} sumBudget={props.sumBudget} />
        </div>
    );
}

export default HomeView;