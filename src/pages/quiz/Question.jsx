import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import { useState, lazy, Suspense } from 'react';
import style from '../../component/question/question.module.css'
import Button from "../../component/button/Button";
import { IoIosArrowBack } from "react-icons/io";



export default function Question() {

    // Big problem: useSelector from Redux =>  component re-render => lazy import stuff
    // ==>> Cumulative Layout Shift (CLS) problem :))
    // ==>> Use callback prop in this case intead of...

    const [currentQuiz, setCurrentQuiz] = useState(1);
    const [isDoneCQ, setIsDoneCQ] = useState(false);
    const NUMBER_ANSWERS = 3;
    const Outlet=lazy(()=>import(`../../component/question/Question${currentQuiz}.jsx`))
    const handleCheckDone = (done) => {
        setIsDoneCQ(done)
    }


    return (
        <>
        <Header/>

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
                    <Outlet handleCheckDone={handleCheckDone}  />
                </Suspense>
            </div>

            <div className={style.bottom}  >
                <Button tag={'primary'} width={'30%'} onClickCallback={isDoneCQ  ? () => setCurrentQuiz(currentQuiz + 1) : () => {}}>
                        Continue
                </Button>
            </div>
        </div>
        <Footer/>
        </>
    )
}