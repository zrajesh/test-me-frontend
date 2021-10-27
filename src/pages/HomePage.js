// Import components
import AssignmentSection from "../components/assignmentSection/AssignmentSection";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import MidSection from "../components/midSection/MidSection";
import Navigation from "../components/navigation/Navigation";

const HomePage = () => {
    return (
        <div>
            <Navigation /> 
            <Hero />
            <MidSection />
            <AssignmentSection />
            <Footer />
        </div>
    );
};

export default HomePage;
