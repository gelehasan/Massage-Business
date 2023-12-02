import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; 
const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-links">
        <Link to="/AddService" className="Nav-link">Add Service</Link>
        </div>
     { /*<div className="dashboard-links">
        <Link to="/add-service">Add Service</Link>
        <Link to="/update-service">Update Service</Link>
        <Link to="/delete-service">Delete Service</Link>
      </div>*/}
    </div>
  );
};

export default DashBoard;
