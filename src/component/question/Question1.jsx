import { useEffect, useState } from 'react'
import style from './question.module.css'
import { FaCircleCheck } from "react-icons/fa6";
import { addAnswer } from '../../state/surveySlice';
import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
export default function Question1({handleCheckDone}){
    const dispatch = useDispatch();
    const answers = useSelector(state => state.survey.answers);
    const [roleSelected, setRoleSelected]=useState(answers[0]||'');
    const roles = ["Mother", "Father", "Prefer not to say"];


    useEffect(() => {
        if(answers[0]){
            setRoleSelected(answers[0]);
        }
    },[answers])

    const handleSelectRole = (role) =>{
        setRoleSelected(role);
        
        dispatch(addAnswer({questionId: 0, answer: role}));
        if(role!==''){
            handleCheckDone(true);
        }
    }

    return (
        <div>
            <div className={style.main}>
                <h2>What is your role within the family?</h2>
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