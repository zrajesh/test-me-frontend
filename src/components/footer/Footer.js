// Import list
import {BottomFooter, CashCards, TopFooter} from "./FooterList";
// Import css
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-wrap">
            <div className="footer-svg-background">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
                </svg>
            </div>
        <div className="footer">
            <div className="top-footer">
                {
                    TopFooter.map((item, index) => (
                        <div key={index} className="top-contents">
                            {
                                item.type === "brand" ? item.head :
                                <h2>{item.head}</h2>
                            }
                            {
                                item.type === "contact" ?
                                <div>
                                    <p className="email">{item.email}</p>
                                    <p className="phone">{item.phone}</p>
                                </div> :
                                <p className="para">{item.para}</p>
                            }
                            {
                                item.type === "follow" ?
                                <div className="social-handle">
                                <p className="social-icon">{item.facebook}</p>
                                <p className="social-icon">{item.twitter}</p>
                                </div> : null
                            }
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="bottom-footer">
            {
                BottomFooter.map((item, index) => (
                    <div key={index} className="bottom-contents">
                        <h2>{item.head}</h2>
                        <div className="footer-links">
                        {
                            item.links.map((linkItem, index) => (
                                <Link  
                                 key={index}
                                 to="#"
                                 className="footer-link"
                                 >{linkItem.link}</Link>
                                
                            ))
                        }
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="cash-cards">
            {
                CashCards.map((item, index) => (
                    <p
                     key={index} 
                     className="cash-card"
                    >{item.card}</p>
                ))
            }
        </div>
        </footer>
    );
};

export default Footer;
