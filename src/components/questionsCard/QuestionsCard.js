// Imports
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getQuestions } from "../../redux/actions/questionAction";
import QuestionStatus from "../questionStatus/QuestionStatus";
// Import list
import { QuestionsCardList } from "./QuestionCardList";
// Import css
import "./QuestionsCard.scss";

const QuestionsCard = ({questions}) => {
    const params = useParams();
    var words = params.title.split(" ");
    var title = words[0];
    const dispatch = useDispatch();
    const {head, mark} = QuestionsCardList;
    const [index, setIndex] = useState(0);
    const [check, setCheck] = useState(false);
    let [tempScore, setTempScore] = useState(0);
    const {questionName, options, correct} = questions[index];

    const fetchProduct = async () => {
        const response =  await axios
                .get("https://skilltest-backend.herokuapp.com/api/questions/618aac53ce2b33187481fdaf")
                .catch(err => console.log("ERR: ", err))
                dispatch(getQuestions(response.data))
    }

    const fetchService = async () => {
        const response =  await axios
                .get("https://skilltest-backend.herokuapp.com/api/questions/618aac5ace2b33187481fdb1")
                .catch(err => console.log("ERR: ", err))
                dispatch(getQuestions(response.data))
    }

    const fetchGeneral = async () => {
        const response =  await axios
                .get("https://skilltest-backend.herokuapp.com/api/questions/618aac62ce2b33187481fdb3")
                .catch(err => console.log("ERR: ", err))
                dispatch(getQuestions(response.data))
    }

    const fetchMern = async () => {
        const response =  await axios
                .get("https://skilltest-backend.herokuapp.com/api/questions/618aac44ce2b33187481fdad")
                .catch(err => console.log("ERR: ", err))
                dispatch(getQuestions(response.data))
    }

    useEffect(() => {
        if (title === "product") fetchProduct()
        else if (title === "service") fetchService();
        else if (title === "general") fetchGeneral();
        else fetchMern();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    const nextQuestion = (event) => {
        if (index <= questions.length-1) {
            let selected = 0;
            let selectedOption;
            let i = 0;
            while (i < 4) {
                if (
                    event.target.parentElement.parentElement.parentElement.parentElement.children[1].children[1].children[i].children[0].checked === true
                ) {
                    selected = selected + 1;
                    selectedOption = event.target.parentElement.parentElement.parentElement.parentElement.children[1].children[1].children[i].children[1].children[0].innerText;
                    // Unchecking selected option
                    if (index < questions.length-1) {
                        event.target.parentElement.parentElement.parentElement.parentElement.children[1].children[1].children[i].children[0].checked = false;
                    }
                }
                i = i + 1;
            }
            if (selected > 1) {
                alert("Please select single option only");
            } else {
                // checking selected option
                if (selectedOption === correct) {
                    setTempScore(++tempScore);
                }
                // change icon color when next button clicks
                event.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[3].children[index].style.color="#28C8AB";

                if (index < questions.length-1) {
                    // Increment index to next question
                    setIndex(index+1);
                } else {
                    alert("Assessment completed! Please click submit button.");
                    event.target.disabled = true;
                    event.target.style.cursor = "default";
                }
            }
        } else {
            alert("You are at last question. Click previous to go back");
        }
    }

    const checkOption = (event) => {
        setCheck(!check);
        event.target.checked = check;
    }

    return (
        <div className="question-components">
        <div className="questions-card">
            <div className="quesion-head-container">
                <div className="question-head-div">
                    <p className="question-head">
                    {head} {index+1}/{questions.length}
                    </p>
                </div>
                <div className="quesion-marklater">
                    <p>
                    <i className="mark fas fa-bookmark"></i>
                    {mark}
                    </p>
                </div>
            </div>
            <div className="question-display">
                <p className="question">{questionName}</p>
                <div className="options">
                    {
                        options.map((option, index) => (
                            <div key={index}
                            >
                                <input 
                                 type="radio"
                                 defaultChecked={check} 
                                 onClick={(event) => checkOption(event)}
                                 id={option.id}
                                 className="radio"
                                />
                                <label htmlFor={option.id}>
                                    <span className="option">
                                    {option.option}
                                    </span>
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="question-btns">
                <hr className="btn-hr" />
                <div className="btns">
                    <div>
                        <button 
                         className="next-btn"
                         onClick={(event) => nextQuestion(event)}
                        >
                        SAVE & NEXT
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <QuestionStatus
         questions={questions}
         score={tempScore}
        />
        </div>
    );
};

export default QuestionsCard;
