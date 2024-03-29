import "./style.css";
import Footer from "../Footer/Footer";
const OmOssPage = ()=>{


    return(
        <div className="omOssContainer">
        <div className="omOssHeader">
            <img className="OmOssPic" src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1707685005/safari_nmvqfd.webp"/>

            <div className="omOssdetails">
                <h3>Om Oss</h3>
            <p>Välkommen till Afroroots of Sweden Massage & Cosmetics</p>
                <span>Home</span> <span>»</span> <span>Tjänster</span> <span>»</span> <span>OM OSS</span>

            </div>
        </div>


        <div className="omOssServiceContainer">

            <div className="omOssImageContent">
                <img src="https://images.unsplash.com/photo-1483691278019-cb7253bee49f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>

            <div className="omOssDescription">
            <p>
         <h1> Djup Terapeutisk Massage och Kroppsmekanik </h1>
        <p> Djup terapeutisk massage, med rätt kroppsmekanik, sprider energi i samhället och främjar en djup transformation både på en fysisk och metafysisk nivå.
        </p>

        <ul> 
        <li>Som terapeuter kan rörlig energi ta vår praktik till en ny dimension</li>
        <li>
        den ökar flödet av energi inom oss och ger oss mer kraft, fysiskt, mentalt, känslomässigt och ekonomiskt.
        </li>
        </ul>
                </p>
                </div>
        </div>


        <div className="showcase-container">
      <h1 className="company-name">Afroroots of Sweden</h1>
      <h2 className="showcasetitle">I alla former av massage genomsyras ovillkorlig kärlek</h2>
      <p className="showcasemessage">
        Det handlar om att ge, hålla, läka, hjälpa och sträva efter det bästa för mottagaren.
      </p>
    </div>
        


        {/** SHowcase of services */}

        <div className="three-divs-container">

      <div className="three-divs-content-div">
        <img src="https://images.unsplash.com/photo-1611073615830-9f76902c10fe?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" className="three-divs-image" />
        <h2 className="three-divs-title">Aromaterapi</h2>
        <p className="three-divs-description">
Aromaterapi Massage är den klassiska terapiformen för avslappning. Den är särskilt lämpad för tillstånd som innefattar känslomässig eller fysisk stress. Förbättra ditt fysiska, mentala och känslomässiga välbe nnande med ett urval av himmelska botaniska oljor från Afrika för att höja ditt humör och förnya och återställa.</p>
      </div>


      <div className="three-divs-content-div">
        <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1707685871/stressmassage_qyh0vo.jpg" alt="Image 2" className="three-divs-image" />
        <h2 className="title">Stress Massage</h2>
        <p className="description">Värk och smärta kan ofta hindra oss från att göra det vi behöver. Detta beror ofta på muskelspänningar. Massage kan hjälpa dig förbättra cirkulationen och  exibiliteten, samt minska smärta och stress. En avstressande massage fokuserar på de områden och punkter där du känner mest spänning. Denna typ av massage är perfekt för dig som tillbringar långa dagar sittandes vid skrivbordet eller kör bil</p>
      </div>


      <div className="three-divs-content-div">
        <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1704056190/ook_wqz5hy.jpg" alt="Image 3" className="three-divs-image" />
        <h2 className="three-divs-title">Kalebas</h2>
        <p className="three-divs-description">Denna populära behandling från Afrika utförs med en av världens äldsta växter. Två 100 % torkade pumpafrukter masseras med mjuka,  ytande rörelser tillsammans med naturliga, aromatiska oljor. Genom användningen av oljor och naturligt torkade pumpafrukter rensas kroppen från gifter, spända muskler slappnar av, lymfsystemet stimuleras och blodcirkulationen ökar. Avslappningen förstärks med hjälp av lugnande ljud under behandlingen.</p>
      </div>
    </div>
    <Footer/>
    </div>
    )
}


export default OmOssPage;
