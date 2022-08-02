import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className='footer'>
            <div className='container '>
                <div className='beauty_nav'>
                <img className="footer_logo" src ={require('../img/logo_beauty.png')}/>     
                
                <div className='social-footer_wrapper'>
                    <div className='social_footer_item1'>
                    <img className="social_footer"  src ={require('../img/f.png')}/>
                    </div>
                    <div className='social_footer_item2'>
                    <img className="social_footer"  src ={require('../img/ptica.png')}/>
                    </div>
                    <div className='social_footer_item3'>
                    <img className="social_footer"  src ={require('../img/link.png')}/>
                    </div>
                    <div className='social_footer_item4'>
                    <img className="social_footer"  src ={require('../img/insta.png')}/>
                    </div>
                </div>
                </div>
              
                <img className="social_bottom_reactangle"  src ={require('../img/Rectangle.png')}/>
                {/* blocks */}
                <div className='footer_blocks_wrapper' >
                    {/* block_1 */}
                    <div className='footer_block'>
                        <div className='footer_block_title'>Explore</div>
                        <ul className='footer_block_links'>         
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Articles</li>
                            <li>Contact Us</li>
                        </ul> 
                    </div> 

                    <div className='footer_block'>
                        <div className='footer_block_title'>Utility Pages</div>
                        <ul className='footer_block_links'>         
                            <li>Style Guide</li>
                            <li>404 Not Found</li>
                            <li>Password Protected</li>
                            <li>Licenses</li>
                            <li>Changelog</li>
                        </ul> 
                    </div> 

                    <div className='footer_block'>
                        <div className='footer_block_title'> Keep in Touch</div>
                        <ul className='footer_block_links'>         
                            <li>Address :   24A Kingston St, Los Vegas<br/>NC 28202, USA.</li>
                            <li>Mail :  support@doctors.com</li>
                            <li>Phone :  (+22) 123 - 4567 - 900</li>
                        </ul> 
                    </div> 

                    <div className='footer_block'>
                        <div className='footer_block_title'>Working Hours</div>
                        <ul className='footer_block_links'>         
                            <li>Mon to Fri: 7am - 6pm</li>
                            <li>Sat: 9am - 7pm</li>
                            <li>Sun: 9am - 6pm</li>
                        </ul> 
                    </div> 
                </div>
                </div>
                <div className='footer_end'>© Drafted by VictorFlow - Powered by Webflow</div>
                </section>
         )
}
export default Footer;