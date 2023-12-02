import React from "react";

import "./style.css"; 
import { useState,useEffect } from "react";
import { getAllServices } from "../../Store/services/serviceSelector";
import LoadingSpinner from "../../Components/LoadingSpinner/loadingSpinner";
import DashBoardLinks from "../../Components/DashBoardComponents/DashboardLinks";
import { useSelector } from "react-redux";

const DashBoard = () => {
    const isServiceLoading= useSelector((state)=> state.services.isServiceLoading) 

    console.log()
  return (
    <div>
        { isServiceLoading ? <LoadingSpinner /> 
        :
        <DashBoardLinks />
        }

    </div>
  );
};

export default DashBoard;
