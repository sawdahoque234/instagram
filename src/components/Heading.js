import React from 'react';
import './Heading.css'
import img from '../img/img.png'

const Heading = () => {
    return (
        <div >
            <img src={img} alt="" className='headingimg'/>
        </div>
    );
};

export default Heading;