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
                    <h1>FREE COFFE IS A TAP AWAY</h1>
                    <h3>Join now to start earning Rewards.*</h3>

                    <div className="cta">
                        Join now
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chill;
