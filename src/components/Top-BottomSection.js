import React from 'react';
import "./styles/topBottomSection.css";

const TopBottomSection = () => {
    return (
        <div className="something">
        <div className="topBottomSection">
            <div className="topBottomSection__topBottom-section">
                <div className="topBottomSection__section__container">

                    <div className="topBottomSection__image">
                        <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70203.jpg" alt=""/>
                    </div>

                    <div className="topBottomSection__text">
                        <h1>Order and pick up. Easy as that.
                        </h1>
                        <h3>Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you.</h3>

                        <div className="cta__container">

                            <div className="cta">
                                See pickup options
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="topBottomSection__topBottom-section">
                <div className="topBottomSection__section__container">

                    <div className="topBottomSection__image">
                        <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72045.jpg" alt=""/>
                    </div>

                    <div className="topBottomSection__text">
                        <h1>Floating into summer like…
                        </h1>
                        <h3>Keep the laid-back vibes going. Order Starbucks drinks on Uber Eats.**</h3>

                        <div className="cta__container">
                            <div className="cta">
                                Order now
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        </div>
    );
};

export default TopBottomSection;
