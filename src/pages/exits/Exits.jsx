import style from './exits.module.css'
import Button from '../../component/button/Button'
import Header from '../../component/header/Header'
import Footer from '../../component/footer/Footer'

export default function Exits() {
    return (
        <>
            <Header />
            <div className={style.container}>
                <h2>&quot;I no longer want to participate in the survey&quot;</h2>
                <div className={style.warning}>
                    Your progress will be lost.
                </div>
                <div className={style.info}>You can learn more about the purpose of the survey by contacting our lead
                    researchers if you have further questions.
                </div>
                <div className={style.contact}>
                    <i>
                        <span>Research group</span>
                        (research@gmoft.com)
                    </i>
                </div>

                <div className={style.info}>
                    Are you sure you no longer want to take the survey?
                </div>

                <div className={style.actions}>
                    <Button tag={'secondary'} width={'60%'}>I have changed my mind</Button>
                    <Button tag={'primary'} width={'60%'}>Back to the survey</Button>
                </div>
            </div>
            <Footer/>
        </>
    )
}