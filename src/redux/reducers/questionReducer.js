import {questionActionTypes} from "../actionTypes/questionActionTypes";

const INIT_STATE = {
    questions: [
        {
            question: "",
            options: [
                {option: "", id: ""},
                {option: "", id: ""},
                {option: "", id: ""},
                {option: "", id: ""}
            ],
            correct: ""
        }
    ],
    score: 0
}

export const questionReducer = (state=INIT_STATE, {type, payload}) => {
    switch(type) {
        case questionActionTypes.GET_QUESTIONS:
            return {
                ...state,
                questions: payload
            }
        default:
            return state;
    }
}

export const questionScore = (state=INIT_STATE, {type, payload}) => {
    switch(type) {
        case questionActionTypes.GET_SCORE:
            return {
                ...state,
                score: payload
            }
        default:
            return state
    }
}
