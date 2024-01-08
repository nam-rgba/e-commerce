import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentQuestion: 1,
    answers:{
        0:'',
        1:'',
        2:''
    }
}

export const surveySlice = createSlice({
    name: 'survey',
    initialState,
    reducers: {
        addAnswer: (state, action) => {
            const {questionId, answer}=action.payload;
            state.answers[questionId]=answer;
        },
        setCurrentQuestion: (state, action) => {
            state.currentQuestion = action.payload
        }
    }
})

export const {addAnswer} = surveySlice.actions;
export const {setCurrentQuestion} = surveySlice.actions;

export default surveySlice.reducer; 