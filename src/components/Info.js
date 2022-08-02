import React from 'react';
import './Info.css';

const Info = () => {
    return (
        <section className='inner'>
            <div className='container inner_wrapper'>
                <div className='info_left'>
                    <div className='info'>
                    <div className='warning'>
                            <img className="warning_item" src ={require('../img/warning.png')}/>
                        </div>
                     <div className='info_welcome'>Welcome to Beautyness!!!</div>
                    </div>
                    <div className='content'>
                        Bring The well being & beauty naturally!!!
                    </div>
                    <div className='content_text'>
                    Your body does a lot for you, and your caring therapist can help you return the favor in a way that benefits both your physical and mental wellness.
                    </div>
                    <button className='order'>
                    
                    make a Reservation
                    </button>
                </div>
                <div className='info_right'>
                <img className="right_item" src ={require('../img/woman.png')}/>
                <button className='webflow'>
                <img className="webflow_item"  src ={require('../img/webflow.png')}/>
                    Made in Webflow
                </button>

                </div>
            </div>
            
        </section>
    )
}

export default Info;