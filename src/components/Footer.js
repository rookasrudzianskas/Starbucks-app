import React from 'react';
import "./styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__linksContainer">
                    <h3>About Us</h3>

                    <ul>
                        <li>Our Heritage</li>
                        <li>Our Coffee</li>
                        <li>Stories and News</li>
                        <li>Investor Relations</li>
                        <li>Policies and Standards</li>
                        <li>Customer Service</li>
                    </ul>
                </div>

                <div className="footer__linksContainer">
                    <h3>Careers</h3>

                    <ul>
                        <li>Culture and Values</li>
                        <li>inclusion, Diversity and Equity</li>
                        <li>College Achievement Plan</li>
                        <li>U.S careers</li>
                        <li>Internation Careers</li>
                    </ul>
                </div>

                <div className="footer__linksContainer">
                    <h3>Social Impact</h3>

                    <ul>
                        <li>Ethic Sourcing</li>
                        <li>Leading in Sustainability</li>
                        <li>Strengthening Communities</li>
                        <li>Creating Opportunities</li>
                        <li>Global Social Impact Report</li>
                    </ul>
                </div>

                <div className="footer__linksContainer">
                    <h3>For Business Partners</h3>

                    <ul>
                        <li>Landlord Support Center</li>
                        <li>Suppliers</li>
                        <li>Corporate Gift Card sales</li>
                        <li>Office and Foodservice Coffee</li>
                    </ul>
                </div>

                <div className="footer__linksContainer">
                    <h3>Order and Pickup</h3>

                    <ul>
                        <li>Order on the app</li>
                        <li>Order on the web</li>
                        <li>Delivery</li>
                        <li>Order and Pickup Options</li>
                        <li>Explore and Find the coffee for home</li>
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default Footer;
