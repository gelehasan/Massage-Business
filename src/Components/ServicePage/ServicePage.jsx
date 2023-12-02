import { useSelector } from "react-redux"
import Services from "../Services/Services"
import { getAllServices } from "../../Store/services/serviceSelector";
import { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/loadingSpinner";
const ServicePage = ()=>{
    const isServiceLoading = useSelector((state)=>state.services.isServiceLoading);
    const AllServices = useSelector(getAllServices)
    const [selectedService, setSelectedService] = useState(AllServices[0])
    
    

    return(

        <div>

            { 
            isServiceLoading ?

            <LoadingSpinner/>:
            <Services AllServices={AllServices}/>
        
        }
           

        </div>
    )
}


export default ServicePage;