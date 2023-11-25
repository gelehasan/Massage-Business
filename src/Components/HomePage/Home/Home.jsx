import Slider from "../Slider/Slider"
import "./homeStyle.css"
import ShowCase from "../ServiceShowCase/ShowCase"
import Treatments from "../Treatmeants/Treatmeants"
const HomePage = ()=>{


    return(
        <div className="homePage">
            <Slider />
            <ShowCase />
            <Treatments/>
       
        </div>
    )
}


export default HomePage;