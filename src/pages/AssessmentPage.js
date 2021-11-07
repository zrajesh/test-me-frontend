// Import components
import AssessmentBanner from "../components/assessmentBanner/AssessmentBanner";
import Navigation from "../components/navigation/Navigation";
import SkillTestSection from "../components/skillTestSection/SkillTestSection";

const AssessmentPage = () => {
    return (
        <div>
            <Navigation />
            <AssessmentBanner />
            <SkillTestSection />
        </div>
    );
};

export default AssessmentPage;
