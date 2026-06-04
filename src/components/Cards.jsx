import React from 'react';
import '../App.scss';

function Cards () {
    const cardsData = ["Warhammer 40,000", "Age of Sigmar", "The Horus Heresy", "The Old World", "Middle-Earth"];
            

    return (
        <div className="cards-container">
            {cardsData.map((card, index) => (
                <div key={index} className="card">
                    <i className="fa fa-cube" aria-hidden="true"></i>
                    <div>
                        <p>VIEW ALL</p>
                        <h3>{card}</h3>
                    </div>
                <h2>&gt;</h2>
                </div>
            ))}
        </div>
    );
}

export default Cards;