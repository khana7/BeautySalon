import React from 'react';
import './Lifestyle.css';

const Lifestyle = () => {
    return (
        <section className='about'>
            <div className='right'>
            <div className='lifestyle_name'>
            Take Your Care
            </div>
            <div className='lifestyle_text'>
            Elevate Your Lifestyle by Bring Balance and Well Being Into Your Life
            </div>
            <div className='lifestyle_longtext'>
            Designed to allow you to unwind and feel confident that you’re in good, caring hands. Our first priority is cleanliness. We have a full-time staff whose job is to ensure that the environment at Beautyness remains.            
            </div>
            
            <div className='card_items'>
            <div className='card_item'>
                <img className="card_item_photo" src ={require('../img/monah.png')}/>
                <p className='card_item_text'>Beauty <br/> Experts
                </p> 
            </div>

            <div className='card_item'>
                <img className="card_item_photo" src ={require('../img/cvetok.png')}/>
                <p className='card_item_text'>Quality <br/> Services
                </p> 
            </div>

            <div className='card_item'>
                <img className="card_item_photo" src ={require('../img/shampoo.png')}/>
                <p className='card_item_text'>100% <br/> Nature
                </p> 
            </div>
            </div>

            
            
            

            
            </div>
            <div className='left'>
            <img className="photo" src ={require('../img/lash.png')}/>
            </div> 
            </section>
    )

}

export default Lifestyle;