import {questionActionTypes} from "../actionTypes/questionActionTypes";

export const getQuestions = (questions) => {
    return {
        type: questionActionTypes.GET_QUESTIONS,
        payload: questions
    }
}

export const getScore = (score) => {
    return {
        type: questionActionTypes.GET_SCORE,
        payload: score
    }
}
