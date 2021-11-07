import CtaButton from "../ctaButton/CtaButton";
import "./AdBanner.scss";
import { CtaList } from "./CtaList";

const AdBanner = () => {
    return (
        <div className="ad-banner">
            <div className="ad-text">
                <img
                 src="https://i.ibb.co/CM0M5pJ/dream-company-leaderboard-ad.png" 
                 alt="dreamCompany" 
                />
                <div className="ad-text-content">
                    <h2>Applying for your dream company?</h2>
                    <p>Don't just Aim. Get placed in the company you want</p>
                    <CtaButton CtaList={CtaList} />
                </div>
            </div>
            <div className="ad-image">
                <img
                 src="https://i.ibb.co/5G87Npm/applying-for-your-dream-based-leaderboard.png"
                 alt="ad"
                />
            </div>
        </div>
    );
};

export default AdBanner;
