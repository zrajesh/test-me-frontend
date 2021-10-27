// Imports
import {ReactComponent as Logo} from "../../assets/TestMe_logo.svg";
import { Link } from "react-router-dom";
// Import components
import AccountButton from "./AccountButton";
import { NavList } from "./NavList";
// Import css
import "./Navigation.scss";

const Navigation = () => {
    return (
        <nav className="navigation-wrap">
        <div className="navigation">
            <div className="nav-options">
                <div className="brand">
                    <Link to="/"><Logo /></Link>
                </div>
                <input type="checkbox" id="check" />
                <div className="nav-links">
                    {
                        NavList.map((item, index) => (
                        <AccountButton 
                         key={index} 
                         buttonData={item} 
                        />
                        ))
                    }
                </div>
                <div className="menu">
                    <label htmlFor="check">
                        <i className="menu-icon fas fa-bars"></i>
                    </label>
                </div>
            </div>
        </div>
        <div className="navigation-svg-background">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
        </svg>
        </div>
        </nav>
    );
};

export default Navigation;
