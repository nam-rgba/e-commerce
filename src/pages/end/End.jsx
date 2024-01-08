import Button from '../../component/button/Button'
import Header from '../../component/header/Header'
import Footer from '../../component/footer/Footer'

import style from './end.module.css';

export default function End() {

    const toGmoft = () => {
        window.open('https://gameloft.com/', '_blank');
    }
    return (
        <>
            <Header page={5}/>
                <div className={style.container}>
                    <h2>Thank you!</h2>
                    <div>We appreciate your time so far!</div>
                    <Button tag="primary" onClickCallback={toGmoft}>
                        Back to Gmoft
                    </Button>
                </div>
            <Footer/>
         </>   
    )
}