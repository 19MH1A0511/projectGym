import React from 'react';
import './Hero.css';
import Header from './Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_backs from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="left-h">
            <Header />
            <div className="the-best-ad">
                <div></div>
                <span>the best fitness club in the town</span>
            </div>
            {/* Hero Heading */}
            <div className="hero-text">
                <div><span className='stroke-text'>Shape</span>
                <span>Your</span></div>
                <div><span>Ideal body</span></div>
                <div ><span>in here we will help you to shape and build your ideal body and live up your life to fullest</span></div>
            </div>
            {/* figures */}
            <div className="figures">
                <div >
                    <spam>+140</spam>
                    <spam>expert coachs</spam>
                </div>
                <div>
                    <spam>+978</spam>
                    <spam>members joined</spam>
                </div>
                <div>
                    <spam>+50</spam>
                    <spam>fitness programs</spam>
                </div>
            </div>
            {/* hero button */}
            <div className="hero-buttons">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>
           
        </div>
        <div className="right-h">
            <button className="btn">Join Now</button>

            <div className="heart-rate">
                <img src={Heart} alt="heart" />
                <span>Heart Rate</span>
                <span>116 Bpm</span>
            </div>
            {/* hero images */}
            <img src={hero_image} alt="#hero_image" className='hero_image'/>
            <image src={hero_image_backs} alt ="#hero_image_back" className='hero_image_back' />
            {/* Calories */}
            <div className="Calories">
               <img src={Calories} alt="" />
               <div>
               <span>Calories Burned</span>
                <span>220 Kcal</span>
                </div> 
                
            </div>
            
        </div>

    </div>
  )
}

export default Hero