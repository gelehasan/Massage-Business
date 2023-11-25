import Slider from "../Slider/Slider"
import "./homeStyle.css"
import ShowCase from "../ServiceShowCase/ShowCase"
const HomePage = ()=>{


    return(
        <div className="homePage">
            <Slider />

            <ShowCase />
            
       
        </div>
    )
}


export default HomePage;