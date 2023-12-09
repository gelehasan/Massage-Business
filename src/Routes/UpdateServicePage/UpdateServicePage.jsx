import { useSelector } from "react-redux"
import Services from "../Services/Services"
import { getAllServices } from "../../Store/services/serviceSelector";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../Components/LoadingSpinner/loadingSpinner";
import { useParams } from "react-router-dom";
import UpdateService from "../../Components/UpdateServiceComponent/updateServices.jsx";
const UpdateServicePage = ()=>{
    const isServiceLoading = useSelector((state)=>state.services.isServiceLoading);
    const AllServices = useSelector(getAllServices)
  

    return(

        <div>
      
      <UpdateService AllServices={AllServices}/>
            { 
          /* isServiceLoading ?

            <LoadingSpinner/>:
           */
        
            }
            
           
          
        </div>
    )
}


export default UpdateServicePage;