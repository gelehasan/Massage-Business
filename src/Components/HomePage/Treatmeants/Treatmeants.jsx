import "./style.css";
import { useState, useEffect } from "react";

const Treatments = () => {

    return (
        <div className={`treatmentContainer`}>
            <h1> Elementen och energin  Energi i rörelse och glädje</h1>
            <p> Efter många års studier av massage och naturliga läkningsmetoder, har vi omfamnat den unika och kraftfulla formen av afrikansk klassisk massage.</p>

            <div className="treatmeantShowcase">
                <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504032/sh1_xqkfcz.jpg" />
                <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504033/show1_l37ttp.jpg" />
                <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504032/sh2_s0tfxt.jpg" />
                <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504033/sh3_tmi4tu.jpg" />
                <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504033/sh5_gya7ov.jpg" />
                <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504032/sh4_ypcnbw.webp" />

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
