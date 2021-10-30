// Imports
import { withRouter } from "react-router";
// Import css
import "./CtaButton.scss";

const CtaButton = ({CtaList, history}) => {
    const {text, call} = CtaList;

    const handleRoute = (event) => {
        if (call === "cards") {
            let path = event.target.parentElement.parentElement.children[0].children[0].children[0].innerText;
            history.push(`/assessment/${path.toLowerCase()}`);
        } else if (call === "hero") window.location.replace("#assessmentId");
    }
    
    return (
        <div 
         className="cta"
         onClick={(event) => handleRoute(event)}
         >
            <button className="cta-button">{text}</button>
        </div>
    );
};

export default withRouter(CtaButton);
