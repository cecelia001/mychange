import React from 'react';
import UserDashboard from "../components/UserDashboard";


function HomeView(props) {
    return (
        <div className="HomeView">
            <h2>Overview</h2>
            <h3> Show pie chart, link to budget, link to expenses</h3>
            <UserDashboard />
        </div>
    );
}

export default HomeView;