import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import Button from "../../component/button/Button";

import style from '../../component/question/question.module.css';
import { IoIosArrowBack } from "react-icons/io";
import ques from '../../assets/questions.json';

import { useState, lazy, Suspense, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentQuestion} from '../../state/surveySlice';



export default function Question() {

    // Big problem: useSelector from Redux =>  component re-render => lazy import stuff
    // ==>> Cumulative Layout Shift (CLS) problem :))
    // ==>> Use callback prop in this case intead of...


    // Above approach make another problem: child change => parent re-render ???
    // ==>> Use useCallBack but still not working
    // I need more time to solve this :))

    const dispatch = useDispatch()
    const current=useSelector(state => state.survey.currentQuestion)

    const [currentQuiz, setCurrentQuiz] = useState(current);
    const [isDoneCQ, setIsDoneCQ] = useState(false);
    const navigate = useNavigate();


    const NUMBER_ANSWERS = 3;
    const question = ques.questions;


    let Outlet=lazy(()=>import(`../../component/question/Question${question[currentQuiz-1].type}.jsx`))



    // Callback to handle check done in child component
    const handleCheckDone = useCallback( (done) => {
        setIsDoneCQ(done)
    },[])


    // Save answer and change question
    const handleChangeQuestion = () => {
        if (isDoneCQ === true && currentQuiz!==NUMBER_ANSWERS) {
            setCurrentQuiz(currentQuiz + 1);
            dispatch(setCurrentQuestion(currentQuiz + 1))
        }else if(isDoneCQ === true && currentQuiz===NUMBER_ANSWERS){
            console.log('done')
            navigate('/thank')
        }

    }
    return (
        <>
        <Header page={2}/>

        <div className={style.container}>
            <div className={style.above}>
                <div className={style.back} onClick={() => setCurrentQuiz(currentQuiz - 1)}>
                    <IoIosArrowBack /> Back
                </div>

                <div>
                    [Part 1] {currentQuiz}/{NUMBER_ANSWERS}
                </div>
            </div>
            <div className={style.outlet}>
                <Suspense fallback={<p></p>}>
                    <Outlet handleCheckDone={handleCheckDone} ques={question[currentQuiz-1]}  />
                </Suspense>
            </div>

            <div className={style.bottom}  >
                <Button tag={isDoneCQ ? 'primary' : 'unenable'} width={'30%'} onClickCallback={handleChangeQuestion}>
                        Continue
                </Button>
            </div>
        </div>
        <Footer/>
        </>
    )
}