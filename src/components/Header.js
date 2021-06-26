import React from 'react';
import "./styles/Header.css";
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                    <div className="header__logo">
                        <div className="header__leftNav">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" alt=""/>
                            <div className="header__nav">
                                <ul>
                                    <li>Menu</li>
                                    <li>Rewards</li>
                                    <li>GiftCards</li>
                                </ul>
                            </div>
                        </div>

                        <div className="header__rightNav">

                                <div className="header__findStore">
                                    <LocationOnIcon className="header__locationIcon" />
                                    <span>Find_a_store</span>
                                </div>

                                <div className="header__signIn">

                                </div>

                            <div className="header__joinNow">

                            </div>


                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Header;
