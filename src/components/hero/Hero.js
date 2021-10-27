// Import components
import CtaButton from "../ctaButton/CtaButton";
import {ReactComponent as HeadImage} from "../../assets/masthead_image.svg";
// Import list
import { HeroList } from "./HeroList";
// Import css
import "./Hero.scss";

const Hero = () => {
    const {headingBold, headingLight, para} = HeroList;

    return (
        <section className="hero">
            <div className="hero-message">
                <h1 className="headingOne">{headingBold}</h1>
                <p className="headingTwo">{headingLight}</p>
                <p className="subHeading">{para}</p>
                <CtaButton CtaList={HeroList} />
            </div>
            <div className="hero-image">
                <HeadImage />
            </div>
        </section>
    );
};

export default Hero;
