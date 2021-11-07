// Import css
import { useSelector } from "react-redux";
import AdBanner from "../adBanner.js/AdBanner";
import Navigation from "../navigation/Navigation";
import DoughnutComponent from "./Doughnut";
import "./ScoreBoard.scss";

const ScoreBoard = () => {
    const score = useSelector(state => state.status.score);
    const totalQuestion = 5;
    return (
        <div>
        <Navigation />
        <div className="score-board">
            <div className="summary">
                <div className="summary-head">
                    <h2 className="head">TEST SUMMARY</h2>
                </div>
                <div className="rateNo">
                    <p className="total">No. of Questions</p>
                    <p className="total">{totalQuestion}</p>
                </div>
                <div className="rateCorrect">
                    <p className="correct">Correct</p>
                    <p className="correct">{score}</p>
                </div>
                <div className="rateIncorrect">
                    <p className="incorrect">Incorrect</p>
                    <p className="incorrect">{totalQuestion - score}</p>
                </div>
                <p className="total-score">Total Score</p>
                <div className="rateTotal">
                    <p className="total-content">Total:</p>
                    <p className="total-content">{score}/{totalQuestion}</p>
                </div>
            </div>
            <div className="summary-chart">
                <div className="chart-head">
                    <h2 className="head">Summary</h2>
                </div>
                <div className="chart-details">
                    <i className="squareCorrect fas fa-square"><span className="span">Correct</span></i> 
                    <i className="squareInCorrect fas fa-square"><span className="span">Incorrect</span></i> 
                </div>
                <div className="chart-display">
                    <DoughnutComponent score={score} total={totalQuestion} />
                </div>
            </div>
        </div>
        <AdBanner />
        </div>
    );
};

export default ScoreBoard;
