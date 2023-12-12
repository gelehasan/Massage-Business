import "./style.css";


const Treatments = () => {

    return (
        <div className="treatmentContainer">
            <h1> Elementen och energin  Energi i rörelse och glädje</h1>
            <p> Efter många års studier av massage och naturliga läkningsmetoder, har vi omfamnat den unika och kraftfulla formen av afrikansk klassisk massage.</p>

            <div className="treatmeantShowcase">
                <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1702415748/mass_ewqimn.avif" />
                <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1702416019/sht_tn4qx7.jpg" />
                <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1702415735/massage_safegn.avif" />
                <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1702415735/mass_ghlbri.webp" />
                <img src="https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?q=80&w=2697&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1702415737/kllk_ewvkq8.avif" />

            </div>


            <div className="treatMeantDescription">

                <div className="treatMeantDescriptionCol">
                    <img src="https://images.pexels.com/photos/8140918/pexels-photo-8140918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

                    <div>  <h3> Butik Lojalitet Vi har högt fokus på</h3>
                        <p> produktkvalitet, så alla produkter testas innan de säljs</p>

                    </div>
                </div>


                <div className="treatMeantDescriptionCol">
                    <img src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

                    <div> <h3>Naturliga Produkter Vi använder våra egna </h3>
                        <p> utlandska produkter som är noggrant utvalda</p>

                    </div>
                </div>


                <div className="treatMeantDescriptionCol">
                    <img src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

                    <div className="descripionDetail">  <h3> Produkter</h3>
                        <p>  Vi erbjuder handel av våra premium produkter som används i tjänsterna</p>

                    </div>

                </div>

            </div>

        </div>
    )
}


export default Treatments;
