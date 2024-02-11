import "./product.css"


const Product = ()=>{

    return(

        <div className="productContainer">
            <div className="productDetail"> 
            <h1> Produkter Konsten Av Naturlig Skönhet </h1>
    <p> Upptäck vårt sortiment av internationella produkter som vi erbjuder i vår butik.</p>
            </div>
        

    <div className="productImg"> 
    <div>
    <img  src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1707689373/kalabesh_atnxg2.jpg"/>
    </div>
    
    <div><img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1707689013/qasilorgin_vac2u5.jpg" />
    </div>
    <div>
    <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1707688268/qasilPicss_yskcg6.jpg"/>
    </div>
    <div>
    <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1707688268/oil_dpm34w.jpg"/>
    </div>
    </div>
        </div>
    )
}


export default Product;