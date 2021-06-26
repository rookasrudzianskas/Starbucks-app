import React from 'react';
import "./styles/Rewards.css";

const Rewards = () => {
    return (
        <div className="rewards">
            <div className="rewards__leftRight__section">
                <div className="rewards__text">
                    <h1>FREE COFFE IS A TAP AWAY</h1>
                    <h3>Join now to start earning Rewards.*</h3>

                    <div className="cta">
                        Join now
                    </div>
                </div>

                <div className="rewards__image">
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71056.png" alt=""/>
                </div>
            </div>

        </div>
    );
};

export default Rewards;
