import React from 'react';
import './Services.css';


const Services = () => {
    return (
        <section className="services">
            <div className="spa">
                <img className="spa_photo" src ={require('../img/spa.png')}/>
                
            <div className='spa_name'>
            Spa & Massage
            </div>
            <div className='spa_text'>
            Your wellness goals and the areas of preference, then unwind with a customized massage experience.
            </div>
            <button className='read_more'>
               Read more
            </button>
            </div>

            <div className="spa">
                <img className="spa_photo" src ={require('../img/hair.png')}/>
            <div className='spa_name'>
            Hair & Beauty
            </div>
            <div className='spa_text'>
            Combining skin-type-specific cleansing & toning, exfoliation, deep-pore cleansing extractions customized treatment.           
             </div>
            <button className='read_more'>
               Read more
            </button>
            </div>

            <div className="spa">
                <img className="spa_photo" src ={require('../img/body.png')}/>
            <div className='spa_name'>
            Body Treatments
            </div>
            <div className='spa_text'>
            Offers therapeutic benefits such as relief of muscle tension and increased circulation to the areas worked. 
            </div>
            <button className='read_more'>
               Read more
            </button>
            </div>
            
        </section>

    )
}



export default Services;