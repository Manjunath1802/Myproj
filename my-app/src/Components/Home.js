import recat from 'react';
import './Home.css';
import { GiHospitalCross } from "react-icons/gi";
import { useNavigate  } from "react-router-dom";

const Home=()=>{
    return(
    <div className='main'>
    <div className='home'>
        <div className='homtxt'>
        <h2 className='healthtxt'>❤️Health comes first</h2>
        <h1 className='healthtxt1'>Find your Doctor and make an Appointments</h1>
        <p className='healthtxt2'>
        Talk to online doctors and get medical advice, 
        online prescriptions, refills and medical notes within minutes.
         On-demand healthcare services at your fingertips.
        </p>
        <button className='bookbtn'><GiHospitalCross className='bookicn' type="button"
        
        />Book-Appointment</button>
        <div className='rvtxt'>
      <div className='txt-cont'>
        <p className='txt1'>145+</p>
        <p className='txt2'>Receive Patients</p>
      </div>
      <div className='txt-cont'>
      <p className='txt1'>45+</p>
        <p className='txt2'>Expert Doctors</p>
      </div>
      <div className='txt-cont'>
      <p className='txt1'>15+</p>
      <p className='txt2'>Years of Experience</p>
      </div>
    </div>
        </div>
       <div className='imghome'>
       <img src="doctor1.png" alt="notsound"  className='img'/>
       </div> 
       
    </div>
    
    </div>
    );
};

export default Home;