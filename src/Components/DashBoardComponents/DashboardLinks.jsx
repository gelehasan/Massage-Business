import "./style.css"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeService } from "../../Firebase/Firebase";

const DashBoardLinks = ()=>{
    const ServicesData= useSelector((state)=> state.services.Services) 

    const removeServiceFromList = async(serviceName)=>{
        try {
            const response = await removeService(serviceName);

            console.log(response)
            window.location.reload()
        } catch (error) {
            
        }


    }
    return(
        <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-links">
        <Link to="/AddService" className="Nav-link">Add Service</Link>
        </div>
     
      {
        ServicesData.map((item)=>{
           
            return(
                <div className="AvaiableServices"  key={item.id}>
                
                <div> <h4 > {item.id}</h4> </div>
             
                <div className="serviceCrud">   
                <button> Update  </button>
                 <button onClick={() => removeServiceFromList(item.id)}>  Delete </button>
              </div>
                </div>
            )
        })
      }
 
      
      
    </div>
    )
}


export default DashBoardLinks;