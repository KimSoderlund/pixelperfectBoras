import React from 'react';
import '../App.scss';

function Header() {
  return (
    <div className="header-container">
        <div className="top-header">
            <div>
            <a href="#">New to Warhammer</a> <a href="#">Explore our Games</a> <a href="#">Paint Warhammer</a> <a href="#">Warhammer Community</a> <a href="#">Warhammer+</a>
        </div>
        <div>
            <a href="#">Find a Store</a> <a href="#">Contact Us</a>
            <div>
                <div className="language-selector">
                    <img className="language-selector-icon" src="src\assets\images\flag.png" alt="Language Selector"></img>
                    <p>Swedish/English</p>
                </div>
                <a href="#">Contact Us</a>
            </div>
        </div>
        </div>

        <div className="mid-header">
                        <div>
                            <p><i className="fa fa-globe" aria-hidden="true"></i> Import taxes and duties included for deliveries within the EU</p>
                        </div>
                        <div>
                            <p><i className="fa fa-undo" aria-hidden="true"></i> Lifetime Returns and Exchanges (Exclusions Apply)</p>
                        </div>
                        <div>
                            <p><i className="fa fa-truck" aria-hidden="true"></i> Free Deliveries for orders over 600 kr (Exclusions Apply)</p>
                        </div>
                        <div>
                            <p><i className="fa fa-home" aria-hidden="true"></i> Delivery to Warhammer Stores is Always Free</p>
                        </div>
        </div>

        <div className="navbar">
            <img src="src\assets\images\Warhammer-logo-white.png" alt="Warhammer Logo"></img>
            <a href="#">NEW & EXCLUSIVE</a>
            <a href="#">WARHAMMER 40,000</a>
            <a href="#">AGE OF SIGMAR</a>
            <a href="#">THE HORUS HERESY</a>
            <a href="#">THE OLD WORLD</a>
            <a href="#">MIDDLE-EARTH</a>
            <a href="#">MORE</a>
            <input type="text" placeholder="Search the store"></input>
            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
            <i className="fa fa-user-circle" aria-hidden="true"></i>
        </div>
    </div>
  )
}

export default Header
