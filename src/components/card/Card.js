// Import components
import CtaButton from "../ctaButton/CtaButton";
// Import list
import { CtaList } from "./CtaList";
// Import css
import "./Card.scss";

const Card = ({AssessmentCard}) => {
    const {titleFirst, titleSecond, imageUrl, bg} = AssessmentCard;

    return (
        <div className="card-container">
        <div 
         className="card"
         style={{backgroundColor: bg}}
        >
            <div className="card-text">
                <h2 className="card-head">{titleFirst}<br />{titleSecond}</h2>
            </div>
            <div className="card-image-div">
                <img
                 className="card-image"
                 src={imageUrl}
                 alt="card"
                 />
            </div>
        </div>
            <CtaButton CtaList={CtaList} />
        </div>
    );
};

export default Card;
