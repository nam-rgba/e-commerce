import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import Button from "../../component/button/Button";

import style from './term.module.css'
import info from '../../assets/information.json'

import { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha"

export default function Term(){
    const data = info.information;
    const captchaRef = useRef(null);
    const navigate = useNavigate();
    const [err, setErr]=useState(false);
    

    const handleVerify = () => {
        const token = captchaRef.current.getValue();
        if(token){
            captchaRef.current.reset();
            navigate('/questions')
        }else{
            setErr(true);
        }
    }
    return (
        <div>
            <Header page={1}/>
            <div className={style.content}>
                <div className={style.thanks}>
                    <h2>Thank you for your interest</h2>
                    <div className={style.plea}><span>Please read the information below</span></div>
                    <div>Once you have read and understood the information, if you agree to take part
                         in the research, click on the &quot;<b>I Agree</b>&quot; button to begin the survey.</div>
                </div>

                <div className={style.information}>
                    {data.map((item, index) => (
                        <div key={index}>
                            <h3>{item.q}</h3>
                            <div>
                                {item.a.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <ReCAPTCHA sitekey={import.meta.env.VITE_SITE_KEY} ref={captchaRef}/>
                
                <div className={err?style.err:style.noneDisplay}>
                    You need to check the box to continue...
                </div>
                
                <div className={style.actions}>
                    <Button tag={'secondary'} width={'30%'}>Cancle</Button>
                    <Button tag={'primary'} onClickCallback={handleVerify}>I have read and agree with the terms of use</Button>
                </div>

            </div>
            <Footer/>
        </div>
    )
}