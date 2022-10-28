import React from 'react';
import UserDashboard from "../components/UserDashboard";


function HomeView(props) {
    return (
        <div className="HomeView">            
            <UserDashboard expenses={props.expenses} />
        </div>
    );
}

export default HomeView;