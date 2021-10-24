// Import css
import "./CtaButton.scss";

const CtaButton = ({text}) => {
    return (
        <div className="cta">
            <button className="cta-button">{text}</button>
        </div>
    );
};

export default CtaButton;
