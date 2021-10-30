// Import components
import Card from "../card/Card";
// Import list
import { AssignmentHead, AssessmentCardList } from "./AssignmentList";
// Import css
import "./AssignmentSection.scss";

const AssignmentSection = () => {
    const {head} = AssignmentHead;
    
    return (
        <section className="assignment-section" id="assessmentId">
        <div className="assignment-head">
            <h2>{head}</h2>
        </div>
        <div className="assignment-cards">
            {
                AssessmentCardList.map((AssessmentCard, index) => (
                    <Card
                     key={index}
                     AssessmentCard={AssessmentCard}
                    />
                ))
            }
        </div>
        </section>
    );
};

export default AssignmentSection;
