/* eslint-disable react/prop-types */
import style from './question.module.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer } from '../../state/surveySlice';


// eslint-disable-next-line react/prop-types
export default function Question3({handleCheckDone, ques}){
    const dispatch=useDispatch();
    const answer = useSelector(state => state.survey.answers);
    const MAX_LENGTH=2000;
    const [textAnswer, setTextAnswer] = useState(answer[2]||'');
    const isUpToMaxLength = textAnswer.length === MAX_LENGTH;

    
    useEffect(() => {
        if (answer[2]) {
            setTextAnswer(answer[2]);
        }
    }, [answer]);

    useEffect(() => {
        dispatch(addAnswer({ questionId: 2, answer: textAnswer }));
    },[textAnswer, dispatch]);
    const handleChangeAnswer = (e) =>{
        setTextAnswer(e.target.value)
    }

    console.log(textAnswer)
    if(textAnswer!=''){
        handleCheckDone(true);
    }else{
        handleCheckDone(false);
    }
    
    return (
        <div>
            <h2>{ques.title}
            </h2>

            <textarea  className={isUpToMaxLength ?style.limited: style.textarea}
             maxLength={MAX_LENGTH} value={textAnswer} onChange={(e)=>handleChangeAnswer(e)}></textarea>

             <div className={isUpToMaxLength ? style.noword : style.hasword}>
                {MAX_LENGTH-textAnswer.length}/{MAX_LENGTH} character left
             </div>
        </div>
    )
}