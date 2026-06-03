import React from 'react';
import '../App.scss';
import vignette from '../assets/images/vignette.469cac44.png';

function Hero() {
  return (
    <div className="hero-container">
        <img className="hero-overlay" src={vignette} alt="" aria-hidden="true" />
        <div className="hero-content">
            <div>
                <img src="src\assets\images\Warhammer-40k-Logo.png" alt="Warhammer 40k Logo"></img>
                <h1>ARMAGEDDON:<br></br>COMMING SOON!</h1>
                <p>Take the leap into the new edition of Warhammer 40,000<br></br> with the Armageddon box. Secure your copy this weekend.</p>
            <button>SHOW ME MORE</button>
            </div>
        </div>
            <div>
                <div className = "hero-down-arrow">↓</div>
            </div>
    </div>
  )
}

export default Hero;