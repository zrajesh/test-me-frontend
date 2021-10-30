// Imports
import { useParams } from "react-router";
// Import css
import "./AssessmentBanner.scss";

const AssessmentBanner = () => {
    const {title} = useParams();
    return (
        <div className="assessmet-banner">
            <div className="banner-text">
                <p>
                    <strong>MOCK TEST</strong> for {title.toUpperCase()}
                </p>
            </div>
            <div className="banner-image">
                <img 
                 className="banner-image-svg"
                 src="https://i.ibb.co/ypqHMFQ/mock-test-masthead.png" 
                 alt="banner" 
                />
            </div>
        </div>
    );
};

export default AssessmentBanner;
