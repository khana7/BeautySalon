import React from 'react';
import './Updates.css';

const Updates = () => {
    return (
        <section className='updates'>
            <div className='container'>
                <div className='benefits_uptitle'>Our Blog</div>
                <div className='benefits_title'>Latest Updates</div>
            <div className='updates_items'>
                <div className='first_item'>
                <img className="first_photo" src ={require('../img/face.png')}/>
                <div className='first_info'>
                <div className='data'>September 30,- 2021 Peter Bergson</div>
                <div className='first_uptitle'>How to make the make-up stay last</div>
                <div className='first_title'>Therapeutic aromatherapy can help bring balance both mentally, physically, and different blends.</div>
                </div>
                </div>

                <div className='first_item'>
                <img className="second_photo" src ={require('../img/foot.png')}/>
                <div className='first_info'>
                <div className='data'>September 30,- 2021 John Walker</div>
                <div className='first_uptitle'>Tips to improve your body via cleansing</div>
                <div className='first_title'>Whether you’re looking to stress, boost energy, improve sleep, clear sinuses, or relieve a headache.</div>
                </div>
                </div>

                <div className='first_item'>
                <img className="third_photo" src ={require('../img/cucum.png')}/>
                <div className='first_info'>
                <div className='data'>September 30,- 2021 Christina John</div>
                <div className='first_uptitle'>Experience the beauty at our beauty spa</div>
                <div className='first_title'>We’ve created a range of proprietary aromatherapy blends to enhance your massage or skin therapy.</div>
                </div>
                </div>

                </div>
                <button className='stories'>
                            view more stories
                 </button>

            
            
            
            </div>
        </section>
    )
}

export default Updates;