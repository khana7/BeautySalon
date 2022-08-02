import React from 'react';
import './Customers.css';

const Customers = () => {
    return (
        <section className='customers'>
            <div className='container '>
                    <div className="customers_uptitle">Testimonials</div>
                    <div className="customers_title">What our Customers says...</div>
                    
                    <div className='cards'>
                    <div className="customers_wrapper">
                    <div className='customers_text'>“ Made an appointment with Beautyness and it was the best experience in a salon I have ever had. They went above and beyond to make sure I got what I wanted, & patiently explained her process “
                    </div>
                    <div className='customers_card'>
                        <img className="james" src ={require('../img/james.png')}/>
                        <div className='customers_info'>
                            <img className="stars" src ={require('../img/star.png')}/>
                            <div className='customers_name'>James Williams</div>
                            <div className='customers_citizen'>United States</div>
                         </div>
                         <div className='customers_vector_wrapper'>
                            <img className="customers_vector" src ={require('../img/ugol.png')}/>
                            <img className="customers_vector" src ={require('../img/ugol.png')}/>
                        </div>
                    </div>
                 </div>


                
                    
                    <div className="customers_wrapper2">
                    <div className='customers_text2'>“ I've been going to Beautyness they are always goes above and beyond my expectations and leaves my hair looking and feeling fantastic and looking exactly as I hoped, if not better “
                    </div>
                    <div className='customers_card'>
                        <img className="james" src ={require('../img/carolyn.png')}/>
                        <div className='customers_info'>
                            <img className="stars" src ={require('../img/star.png')}/>
                            <div className='customers_name'>Carolyn James</div>
                            <div className='customers_citizen'>United Kingdom</div>
                         </div>
                         <div className='customers_vector_wrapper'>
                            <img className="customers_vector" src ={require('../img/ugol.png')}/>
                            <img className="customers_vector" src ={require('../img/ugol.png')}/>
                        </div>
                    </div>
                 </div>
                 </div>
           
           
           </div>
        </section>
    )
}

export default Customers;