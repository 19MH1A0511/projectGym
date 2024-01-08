import React from 'react';
import "./Plans.css";
import { plansData } from '../../../Data/plansData';
import whiteTick from '../../../assets/whiteTick.png';

function Plans() {
  return (
    <div className="plans-container">
        <div className="programs-header" style={{gap:'2rem' }}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITH US</span>
        </div>
        {/* plans card */}
        <div className="plans">
            {plansData.map((plan, i) => {
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>{plan.price}</span>
                    <div className="features">
                        {plan.features.map((feature, i)=>{
                            <div className="feature">
                                <img src='../../../assets/whiteTick.png' alt="###" />
                                <span key={i}></span>
                            </div>

                        })}
                    </div>
                    <div><
                        span>See more b</span>
                    </div>
                    <button className="btn"></button>
                </div>
            })}

        </div>
    </div>
  )
}

export default Plans