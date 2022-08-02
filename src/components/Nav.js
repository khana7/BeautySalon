import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <header className='nav'>
            <div className='nav_left'>
                <div className="logo" >
                    <img src ={require('../img/Vector.png')}/>
                </div>
                 <div className='phone_item'>
                    <img src ={require('../img/phone.png')}/>
                
                    <p  className='title_nav'>Call Us - (+22) 123 456 7890</p>
                </div>
            </div>

            <div className='nav_right'>
                <ul class="menu">                
                    <li>
                        <a  href="#"> Home </a>
                    </li>         
                    <li>
                        <a href="#"> About </a>
                    </li>
                    <li>
                        <a href="#"> Pages </a>
                    </li>
                    <li>
                        <a href="#"> Contact Us </a>
                    </li>         
                </ul>

                <div className='social'>
                    <img className="social_item"  src ={require('../img/facebook.png')}/>
                    <img className="social_item" src ={require('../img/twitter.png')}/>
                    <img className="social_item" src ={require('../img/linkedin.png')}/>
                </div>

                <button className='reservation_btn'>
                    <i className="fa-solid fa-calendar reservation_icon"></i>
                    Reservation
                </button>
            </div>

        </header>

 );
}

export default Nav;