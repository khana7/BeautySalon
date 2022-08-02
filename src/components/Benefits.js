import React from 'react';
import './Benefits.css';

const Benefits = () => {
    return (
        <section className='benefits'>
            <div className='container'>
                <div className="benefits_uptitle">Our Awesome Benefits</div>
                <div className="benefits_title">What you’ll get from Us</div>
                    <div className='arrows'>
                        <div className='arrow'>
                        <img className="arrow_photo" src ={require('../img/yes.png')}/>
                        <div className='arrow_uptitle'>Built with you in mind</div>
                        <div className='arrow_title'>We know how important it is to maintain strong relationships with clients.</div>
                        </div>

                        <div className='arrow'>
                        <img className="arrow_photo" src ={require('../img/yes.png')}/>
                        <div className='arrow_uptitle'>The Perfect Salon Services</div>
                        <div className='arrow_title'>Talented, educated, and fashion-forward artists meet the unique needs of client.</div>
                        </div>

                        <div className='arrow'>
                        <img className="arrow_photo" src ={require('../img/yes.png')}/>
                        <div className='arrow_uptitle'>Skin Deep Experiences</div>
                        <div className='arrow_title'>Appropriate for all skin types, sun damage, fine lines and wrinkles, acne, and oily.</div>
                        </div>

                        <div className='arrow'>
                        <img className="arrow_photo" src ={require('../img/yes.png')}/>
                        <div className='arrow_uptitle'>Essential Spa Pedicure</div>
                        <div className='arrow_title'>Indulge in a soothing foot bath along with a callous smoothing exfoliating scrub.</div>
                        </div>

                        <div className='arrow'>
                        <img className="arrow_photo" src ={require('../img/yes.png')}/>
                        <div className='arrow_uptitle'>Skilled Spa Services</div>
                        <div className='arrow_title'>Our skilled estheticians offer an array of refreshing treatments.</div>
                        </div>

                        <div className='arrow'>
                        <img className="arrow_photo" src ={require('../img/yes.png')}/>
                        <div className='arrow_uptitle'>Perfect & Natural Products</div>
                        <div className='arrow_title'>We offer the very best in luxury beauty products for both hair and skin.</div>
                        </div>
                    </div>


            </div>
        </section>
    )
}

export default Benefits;