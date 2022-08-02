import React from 'react';
import './Ourservices.css';

const Ourservices = () => {
    return (
        <section className='ourservices'>
            <div className='container'>
                <div className='ourservice_uptitle'>
                    Our Services
                </div>
                <div className='ourservices_title'>
                Creative excellence and the 
                unparalleled hospitality
                </div>
                <div className='praces_wrapper_1'>
                    <img className="cucumber" src ={require('../img/cucumbers.png')}/>
                    <div className='prices_list'>
                        <div className='prices_item'>
                            <div className='prices_title'>
                                <div>Deep Tissue</div> 
                                <div>from $48.00</div>
                            </div>
                            <div className='prices_description'>
                            A therapeutic massage that used for relieving muscles.
                            </div>
                            <div className='prices_line'>
                            </div>
                    
                        </div>

                        <div className='prices_item'>
                            <div className='prices_title'>
                                <div>Body Scrub</div> 
                                <div>from $18.00</div>
                            </div>
                            <div className='prices_description'>
                            Perfect way to relieve all that unwanted stress in body.</div>
                            <div className='prices_line'>
                            </div>
                            </div>

                            <div className='prices_item'>
                            <div className='prices_title'>
                                <div>Foot massage</div> 
                                <div>from $18.00</div>
                            </div>
                            <div className='prices_description'>
                            Get a relaxing massage focused on your feet and lower legs.  </div>
                            <div className='prices_line'>
                            </div>
                            </div>

                        <div className='prices_item'>
                            <div className='prices_title'>
                                <div>Scalp Treatments</div> 
                                <div>from $15.00</div>
                            </div>
                            <div className='prices_description'>
                            Superior gray creates a rich, natural look with less fading.</div>
                            <div className='prices_line'>
                            </div>
                            <button className='appoinment'>
                            GET AN APPOINTMENT
                            </button>
                            <img className="squares" src ={require('../img/square.png')}/>


                        </div>
                    
                    </div>
                </div>



                <div className='praces_wrapper_2'>
                    <div className='prices_list'>

                        <div className='prices_item'>
                            <div className='prices_title'>
                                <div>Fertility Massage</div> 
                                <div>from $18.00</div>
                            </div>
                            <div className='prices_description'>
                            Help support reproductive health, the menstrual cycle.</div>
                            <div className='prices_line'>
                            </div>
                    
                        </div>

                        <div className='prices_item'>
                            <div className='prices_title'>
                                <div>Blemish Buster</div> 
                                <div>from $40.00</div>
                            </div>
                            <div className='prices_description'>
                            Deep cleansing facial rebalances to promote healthy skin.</div>
                            <div className='prices_line'>
                            </div>
                            </div>

                            <div className='prices_item'>
                            <div className='prices_title'>
                                <div>Oxygen Facial</div> 
                                <div>from $32.00</div>
                            </div>
                            <div className='prices_description'>
                            Hydrates, tones, lifts, and adds radiance to the skin.</div>
                            <div className='prices_line'>
                            </div>
                            </div>

                        <div className='prices_item'>
                            <div className='prices_title'>
                                <div>Lash Lift</div> 
                                <div>from $25.00</div>
                            </div>
                            <div className='prices_description'>
                            Treatment for natural lashes that can add curl and definition.
                            </div>
                            <div className='prices_line'>
                            </div>
                            <button className='appoinment'>
                            GET AN APPOINTMENT
                            </button>
                            </div>
                    
                    </div>
                    <img className="mask" src ={require('../img/maska.png')}/>
                    
                </div>
            
            </div>
        </section>
    )
}
export default Ourservices;