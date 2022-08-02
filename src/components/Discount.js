import React from 'react';
import './Discount.css';

const Discount = () => {
    return (
        <section className='discount'>
            <div className='container'>
                <div className='discount_wrapper'>
                <div className='discount_info'>
                <div className='discount_uptitle'>Flat Discount</div>
                <div className='discount_title'>Claim upto 50% offer on the most popular services...</div>
                <div className='discount_text'>Our Retreat is not meant to be an occasional treat, but rather a part of your routine that restores balance to your daily life.
                    <img className="discount_photo" src ={require('../img/get.png')}/>
                </div>
                </div>
                <div className='form'>
                    <form>
                        <div className='form-input_wrapper'>
                            <input type="text" placeholder='Name' className='form_input' />
                            <img className="name_photo" src ={require('../img/people.png')}/>
                        </div>

                        <div className='form-input_wrapper'>
                            <input type="email"  placeholder='Email' className='form_input' />
                            <img className="email_photo" src ={require('../img/sms.png')}/>
                        </div>

                        <div className='form-input_wrapper'>
                            <input type="tel" placeholder='Contacts' className='form_input' />
                            <img className="tel_photo" src ={require('../img/telefon.png')}/>
                        </div>

                        <div className='form-input_wrapper'>
                            <input type="text"  placeholder='Booking' className='form_input'/>
                            <img className="book_photo" src ={require('../img/book.png')}/>
                        </div>
                        
                        <div className='form-input_wrapper'>
                            <div className="textarea-wapper"><textarea placeholder='Feedbacks' className='text-form_input' /></div>
    
                            <img className="feed_photo" src ={require('../img/notebook.png')}/>
                        </div>
                        </form>
                
                        <button className='discount_btn'>
                        
                        </button>

                        </div>
                </div>
            </div>
        </section>
    )
}

export default Discount;