import React, { useState } from 'react'
import './Testimonials.css';
import {testimonialsData} from '../../../Data/testimonialsData';

const Testimonials = () => {

    const [selected,setSelected] = useState();
    const tLength = testimonialsData.length;
  return (
    <div className="Testimonials">
<div className='left-t'>
    <span>Testimonials</span>
    <span className='stroke-text'>What they</span>
    <span>Say about us</span>
    <span>{testimonialsData[selected].review}</span>
    <span>    
        <span style = {{color:'var(--orange)'}}>
            {testimonialsData[selected].name}
        </span>{" "}
        {testimonialsData[selected].status}
    </span>
</div>
<div className='right-t'>
    <img src={testimonialsData[selected].image} alt='' /> 
</div>
    </div>

  )
}



export default Testimonials;