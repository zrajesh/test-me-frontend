// Import components
import Hero from "../components/hero/Hero";
import MidSection from "../components/midSection/MidSection";
import Navigation from "../components/navigation/Navigation";

const HomePage = () => {
    return (
        <div>
            <Navigation /> 
            <Hero />
            <MidSection />
        </div>
    );
};

export default HomePage;
