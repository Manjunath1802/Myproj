import './style.css';
import { BsChatDots } from "react-icons/bs";
import { toast } from "react-toastify";
import {useState} from 'react';
const Navbar=()=>{

     const[IsButtonDisabled,setIsButtonDisabled]=useState(false);
    function handleclick(){
         if(!isdisblebtn){
        toast.info("Experiencing High Trafic",{
            position: toast.POSITION.TOP_CENTER,
            onOpen: () => setIsButtonDisabled(true),
            onClose: () => setIsButtonDisabled(false)}
        );
     }
    };

  return (
    <div className="navbar">
   <h1 className='navtxt'>Health<span className='navplus'>+</span></h1>

<ul className='navlist'>
        <li className='navlink'>
            <a href='#home'>Home</a>
        </li>
        <li className='navlink'>
            <a href='#About'>About</a>
        </li>
        <li className='navlink'>
            <a href='#Service'>Service</a>
        </li>
        <li className='navlink'>
            <a href='#Review'>Review</a>
        </li>
        <li className='navlink'>
            <a href='#Doctor'>Doctor</a>
        </li>
    </ul>
    <button className='navbtn' onClick={handleclick}><BsChatDots className='btnicn'/>Live-Chat</button>
    </div>
   
  );
};

export default Navbar;
