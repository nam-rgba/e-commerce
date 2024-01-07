import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import Button from "../../component/button/Button";
import style from './term.module.css'
import info from '../../assets/information.json'

export default function Term(){
    const data = info.information;
    return (
        <div>
            <Header pageNumber={1}/>
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

                <div className={style.actions}>
                    <Button tag={'secondary'} width={'30%'}>Cancle</Button>
                    <Button tag={'primary'}>I have read and agree with the terms of use</Button>
                </div>

            </div>
            <Footer/>
        </div>
    )
}