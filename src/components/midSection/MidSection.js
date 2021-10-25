// Import list
import { MidSectionList } from "./MidSectionList";
// Import css
import "./MidSection.scss";

const MidSection = () => {
    const {heading, para} = MidSectionList;

    return (
        <section className="mid-section">
            <div className="mid-section-top-svg">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="mid-contents">
                <div className="mid-image-div">
                    <img className="mid-image" src="https://i.ibb.co/FBCQSfq/people-img.png" alt="people" />
                </div>
                <div className="mid-info">
                    <h2 className="subheading">{heading}</h2>
                    <p className="sub-para">{para}</p>
                </div>
            </div>
            <div className="mid-section-bottom-svg">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
};

export default MidSection;
