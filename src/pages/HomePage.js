// Import components
import AssignmentSection from "../components/assignmentSection/AssignmentSection";
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
        </div>
    );
};

export default HomePage;
