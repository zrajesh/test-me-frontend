import {combineReducers} from "redux";
// Import reducers
import {questionReducer, questionScore} from "./reducers/questionReducer";

export default combineReducers({
    questions: questionReducer,
    status: questionScore
});
