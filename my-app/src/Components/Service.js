import React from "react";
import './service.css';
import Infocard from "./Infocard";
import { FaAmbulance } from "react-icons/fa";
import { FaHeartPulse, FaTooth} from "react-icons/fa6";

const Service=()=>{
 return(
   <div className="txtinfo">
    <div className="txt">
        <h1 className="txt-ttle"><span></span>
            What We Do</h1>
        <p className="txtpara">
        We bring healthcare to your convenience, offering a comprehensive range of on-demand medical 
        services tailored to your needs. Our platform allows you to connect with experienced online 
        doctors who provide expert medical advice, issue online prescriptions, and offer quick 
        refills whenever you require them.
        </p>
    </div>
    <div className="cardsection">
     <Infocard className='c1'
      title="Emergency Care"
      description="Our Emergency Care service is designed to be your reliable support
      in critical situations. Whether it's a sudden illness, injury, or
      any medical concern that requires immediate attention, our team of
      dedicated healthcare professionals is available 24/7 to provide
      prompt and efficient care."
      icon={FaAmbulance}
     />
     <Infocard className='c2'
      title="Heart Disease"
      description="Our team of experienced cardiologists and medical experts use
        state-of-the-art technology to assess your cardiovascular health and
        design personalized treatment plans. From comprehensive screenings
        to advanced interventions, we are committed to helping you maintain
        a healthy heart and lead a fulfilling life."
      icon={FaHeartPulse}/>
     <Infocard className='c2'
      title="Dental Care"
      description="Smile with confidence as our Dental Care services cater to all your
        oral health needs. Our skilled dentists provide a wide range of
        treatments, from routine check-ups and cleanings to cosmetic
        procedures and restorative treatments."
      icon={FaTooth}
    />
    </div>
   </div>
 );
};
export default Service;