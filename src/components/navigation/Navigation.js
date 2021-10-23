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
        <nav className="navigation">
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
        </nav>
    );
};

export default Navigation;
