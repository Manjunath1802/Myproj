import recat from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as React from 'react';
import { FaAmbulance } from "react-icons/fa";

const infocard=(props)=>
    { return(
        <diV className="cardsec">
            <span className='cardicn'>
                <FaAmbulance icon={props.icon} className='icn'/>
            </span>
            <h1 className='cardttle'>{props.title}</h1>
            <p className='carddesc'>{props.description}</p>
        </diV>
       );
    };
 export default infocard;