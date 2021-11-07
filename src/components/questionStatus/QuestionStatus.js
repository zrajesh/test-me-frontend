// Import css
import CtaButton from "../ctaButton/CtaButton";
import { CtaList } from "./CtaList";
import "./QuestionStatus.scss";

const QuestionStatus = ({questions, score}) => {
    return (
        <div className="question-status">
            <h2 className="status-head">Question Status</h2>
            <div className="status-icon">
                <p><i className="box-icon-ans fas fa-square">
                </i>Answered
                </p>
                <p><i className="box-icon-unans fas fa-square">
                </i>Unanswered
                </p>
                <p><i className="box-icon-marked fas fa-square">
                </i>Marked Later
                </p>
            </div>
            <hr className="status-hr" />
            <div className="status-box-contain">
                {
                    questions.map((item, index) => (
                        <p 
                         key={index} 
                         className="status-box">
                            <i className="fas fa-square"></i> 
                        </p>
                    ))
                }
            </div>
            <CtaButton CtaList={CtaList} score={score} />
        </div>
    );
};

export default QuestionStatus;
