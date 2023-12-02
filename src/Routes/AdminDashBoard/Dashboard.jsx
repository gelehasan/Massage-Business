import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; 
import { useState,useEffect } from "react";
import { getAllServices } from "../../Store/services/serviceSelector";


console.log(getAllServices)
const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-links">
        <Link to="/AddService" className="Nav-link">Add Service</Link>
        </div>
     
      <div className="AvaiableServices">
      <h4 > Add Service </h4>
      <div className="serviceCrud"> 
    <h4> Update  </h4>
    <h4>  Delete </h4>
      </div>
      </div>
      
    </div>
  );
};

export default DashBoard;
