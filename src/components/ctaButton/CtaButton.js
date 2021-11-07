// Imports
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { getScore } from "../../redux/actions/questionAction";
// Import css
import "./CtaButton.scss";

const CtaButton = ({CtaList, score, history}) => {

    const {text, call} = CtaList;
    const dispatch = useDispatch();

    const handleRoute = (event) => {
        if (call === "cards") {
            let path = event.target.parentElement.parentElement.children[0].children[0].children[0].innerText;
            history.push(`/assessment/${path.toLowerCase()}`);
        } else if (call === "hero") window.location.replace("#assessmentId");
        else if (call === "submit") {
            dispatch(getScore(score));
            history.push("/score/assessment");
        } else if (call === "ad") {
            history.push("/");
        }
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
