import Slider from "../Slider/Slider"
import "./homeStyle.css"
import ShowCase from "../ServiceShowCase/ShowCase"
import Treatments from "../Treatmeants/Treatmeants"
import Massage from "../MassageServices/Massage"
import Product from "../Products/Products"
import Footer from "../../Footer/Footer"
const HomePage = ()=>{


    return(
        <div className="homePage">
            <Slider />
            <ShowCase />
            <Treatments/>
            <Massage/>
            <Product />
            <Footer />
        </div>
    )
}


export default HomePage;