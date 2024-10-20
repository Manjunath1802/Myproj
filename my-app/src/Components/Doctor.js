import React from "react";
import './Doctor.css';

const Doctor=()=>{
    return(
        <div className="dctsec">
        <div className="dctrmain">
        <h1 className="dctrt1">Meet Our Doctors<span className="dctspn"></span></h1>
        <p className="dctrpr">Meet our exceptional team of specialist doctors, d
            edicated to providing top-notch healthcare services at Health Plus.
            Trust in their knowledge and experience to lead you towards a 
            healthier and happier life.</p>
        </div>
        <div className="dctpht">
        <div className="dcti">
            <img src="dc1.png" className="dim1"/>
            <h1 className="dctl1">Dr. Kathryn Murphy</h1>
            <h2 className="dctl2">General Surgeons</h2>
            <p className="dctl3"><span></span>4.9 (1800+ Reviews)</p>
        </div>
        <div className="dcti">
            <img src="dc2.png" className="dim1"/>
            <h1 className="dctl1">Dr. Jacob Jones</h1>
            <h2 className="dctl2">Hematologists</h2>
            <p className="dctl3"><span></span>4.8 (1500+ Reviews)</p>
        </div>
        <div className="dcti">
            <img src="dc3.png" className="dim1"/>
            <h1 className="dctl1">Dr. Jenny Wilson</h1>
            <h2 className="dctl2">Endocrinologists</h2>
            <p className="dctl3"><span></span>4.7 (1800+ Reviews)</p>
        </div>
        <div className="dcti">
            <img src="dc4.png" className="dim1"/>
            <h1 className="dctl1">Dr.Manjunath G</h1>
            <h2 className="dctl2">Hematologists</h2>
            <p className="dctl3"><span></span>4.9 (1200+ Reviews)</p>
        </div>
        </div>
        </div>
    );
};

export default Doctor;