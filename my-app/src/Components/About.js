import react from 'react';
import './About.css';
import { MdArrowDropDownCircle } from "react-icons/md";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import {useNavigate} from 'react-router-dom';


const About=()=>{
   

    return(
        <div className='Abt-main'>
        <div className='About-sec'>
            <div className='abtimg'>
           <img src='about1.png' alt='image' className='abtimg1' />
            </div>
            <div className='abttxt'>
               <h1 className='abttitle'>About Us <span className='abtspn'></span></h1>
               <p className='para'>Welcome to Health Plus, your trusted partner for accessible and personalized 
               healthcare. 
               Our expert doctors offer online 
                consultations and specialized services, prioritizing your well-being. Join us on this journey towards 
                a healthier
                 you.</p>
                <h2 className='abttxt2'>Your Solutions</h2>
                <div className='soln'>
                  <h3 className='solt1'><span className='solicn'><MdArrowDropDownCircle/></span>Choose Specialist</h3>
                  <p className='solt2'>Find your perfect specialist 
                    and book with ease at Health Plus. Expert doctors prioritize your health,
                    offering tailored care</p>
                <h3 className='solt1'><span className='solicn'><MdArrowDropDownCircle/></span>Make a Schedule</h3>
                <p className='solt2'>Choose the date and time that
                 suits you best, and let our dedicated team of medical professionals 
                 ensure your well-being with personalized care.</p>
                <h3 className='solt1'><span className='solicn'><MdArrowDropDownCircle/></span>Get Your Solutions</h3>
                <p className='solt2'>Our experienced doctors and specialists 
                are here to provide expert advice and personalized treatment plans, 
                helping you achieve your best possible health.</p>
                </div>
            </div>
            </div>
           <div className='abt-sec1'>
            <div className='abtimg2'>
                <img src='about2.png' className='abtimg2' />
            </div>
            <div className='abttxt3'>
                <h1 className='atxtttl'>Why Choose Health</h1>
                <p className='abpara'>Discover the reasons to choose Health Plus for your healthcare needs.
                     Experience expert care, convenience, and personalized solutions, 
                    making your well-being our top priority. Join us on a journey to better
                     health and a happier life.</p>
                <h2 className='abttx1'><span className='spnt'><IoMdArrowDroprightCircle/></span>Best Professional Doctors</h2>
                <h2 className='abttx1'><span className='spnt'><IoMdArrowDroprightCircle/></span>Emergency Care</h2>
                <h2 className='abttx1'><span className='spnt'><IoMdArrowDroprightCircle/></span>24/7 Support Live Chat</h2>
                <h2 className='abttx1'><span className='spnt'><IoMdArrowDroprightCircle/></span>Enrollment Easy and Quick</h2>
                <button className='abtbtn' type='Button'>Book Apointment</button>
            </div>

            </div> 
        </div>
    );

};
export default About;