import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import { useState, lazy, Suspense } from 'react';
import style from '../../component/question/question.module.css'
import Button from "../../component/button/Button";


export default function Question() {
    const [currentQuiz, setCurrentQuiz] = useState(2);
    const Outlet=lazy(()=>import(`../../component/question/Question${currentQuiz}.jsx`))
    return (
        <>
        <Header/>

        <div className={style.container}>
            <div className={style.above}>
                <div>
                    [Part 1] 01/20
                </div>
            </div>
            <Suspense fallback={<p></p>}>
            <Outlet />
            </Suspense>

            <div className={style.bottom}>
                <Button tag={'primary'} width={'30%'}>
                        Continue
                </Button>
            </div>
        </div>
        <Footer/>
        </>
    )
}