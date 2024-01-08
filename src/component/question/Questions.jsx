/* eslint-disable react/prop-types */
import { useEffect, useState, useMemo } from 'react'
import style from './question.module.css'
import { FaCircleCheck } from "react-icons/fa6";
import { addAnswer } from '../../state/surveySlice';
import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
export default function Question1({handleCheckDone, ques}){
    console.log(ques)
    const dispatch = useDispatch();
    const answers = useSelector(state => state.survey.answers);
    const memoizedAnswers = useMemo(() => answers, [answers]);
    const [roleSelected, setRoleSelected]=useState(memoizedAnswers[0]||'');
    const roles = ques.answers;


    useEffect(() => {
        if(answers[0]){
            setRoleSelected(answers[0]);
        }
    },[answers])

    const handleSelectRole = (role) =>{
        setRoleSelected(role);
        
        dispatch(addAnswer({questionId: 0, answer: role}));

    }

    if(roleSelected!==''){
         handleCheckDone(true);
    }

    return (
        <div>
            <div className={style.main}>
                <h2>{ques.title}</h2>
                <form >
                    {roles.map(role => (
                        <div key={role} className={roleSelected === role ? style.selected : ''} onClick={()=>handleSelectRole(role)}>
                            <label >
                                <div className={style.circle}>
                                    <FaCircleCheck color={roleSelected === role ? '#002248' : 'white'} />
                                </div>
                                {role}
                            </label>
                            <br />
                        </div>
  
                        ))}
                </form>
            </div>
        </div>
    )
}