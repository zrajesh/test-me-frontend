// Imports
import { useSelector } from "react-redux";
// Import components
import QuestionsCard from "../questionsCard/QuestionsCard";
// Import css
import "./SkillTestSection.scss";

const SkillTestSection = () => {
    const questions = useSelector(state => state.questions.questions);
    return (
        <section className="skill-test">
            <QuestionsCard questions={questions} />
        </section>
    );
};

export default SkillTestSection;
