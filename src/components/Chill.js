import React from 'react';
import "./styles/Chill.css";

const Chill = () => {
    return (
        <div className="chill">
            <div className="chill__leftRight__section">

                <div className="chill__image">
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72037.jpg" alt=""/>
                </div>
                <div className="chill__text">
                    <h1>DELIGHTFULLY CHILL</h1>
                    <h3>Refresh your day with the bright, tropical flavors of our Star Drink and Kiwi Starfruit Starbucks Refreshers® beverage.</h3>

                    <div className="cta">
                        Order iced beverage
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chill;
