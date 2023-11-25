import Slider from "../Slider/Slider"
import "./homeStyle.css"
import ShowCase from "../ServiceShowCase/ShowCase"
import Treatments from "../Treatmeants/Treatmeants"
import Massage from "../MassageServices/Massage"
const HomePage = ()=>{


    return(
        <div className="homePage">
            <Slider />
            <ShowCase />
            <Treatments/>
            <Massage/>
       
        </div>
    )
}


export default HomePage;