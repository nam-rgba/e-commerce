import Header from "../../component/header/Header"
import Footer from "../../component/footer/Footer"
import Button from "../../component/button/Button";

import style from './thank.module.css'

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import {  useEffect, useRef, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setName, setMail, setSumary, setFC } from "../../state/userSlice";
import { useDownloadData } from "../../services/useDownloadData";

export default function Thank(){
    const dispatch=useDispatch();
    const user = useSelector(state => state.user.user);
    const data=useDownloadData();

    const [submit, setSubmit] = useState('unenable');
    const [receiveCheck, setReceiveCheck] = useState(false); // Receive sumamry
    const [futureCheck, setFutureCheck] = useState(false); // Future contact
    const navigate = useNavigate();

    const name=useRef();
    const email=useRef();


    useEffect(()=>{
        if(user){
            name.current.value = user.name;
            email.current.value = user.email;
            setReceiveCheck(user.receiveSumary);
        }
    },[user])

    // Check condition to enable submit button
    const checkSubmit = (re) => {

        const isEmailFilled = email.current.value.trim() !== '';

        const isNameFilled = name.current.value.trim() !== '';

        
        if (isNameFilled===true && isEmailFilled===true && re) {
            setSubmit('primary'); 
        } else {
            setSubmit('unenable'); 
        }
    };

    const handleChangeName = (e) => {
        dispatch(setName(e.target.value));
        checkSubmit();
    }

    const handleChangeEmail = (e) => {
        dispatch(setMail(e.target.value));
        checkSubmit();
    }

    const hanndleCheckFuture = () => {
        const newFC = !futureCheck;
        setFutureCheck(newFC);
        dispatch(setFC(newFC));
    }

    // Handle when user checked receive sumary => enable submit button
    const handleReceiveChecked=()=>{
        const newRC=! receiveCheck;
        setReceiveCheck(newRC);
        checkSubmit(newRC);
        dispatch(setSumary(newRC));
    }



    // Big problem: dispatch function not work correctly if change whole 4 demensions
    // =>> Cannot download correctly data
    // =>> Seperate to small dispatch function

    // Submit user information
    const handleSubmitUserInformation= (e)=>{
        e.preventDefault();
        data();
        navigate('/end');
    }

    const back=()=>{
        navigate('/questions')
    }

    return(
        <>
            <Header/>
            <div className={style.container}>
                <h2>Thank you for tanking time to complete our survey. Your help is very much appreciated.</h2>

                <div className={style.ifques}>
                    If you have any questions or concerns, please email the lead researchers:
                </div>

                <div className={style.contact}>
                    <span>Research group</span> (research@gmoft.com) 
                </div>

                <h4>Interested in a summary of the survey?</h4>

                <div className={style.info}>
                    If you would like to receive a summary of the survey findings OR if you are happy to be contacted by Gmoft about future research, please provide your details below and tick the relevant box/es.
                    <br /><br />If you change your mind, you can always opt-out at a later date.
                </div>

                <form onSubmit={handleSubmitUserInformation}>
                    <label className={style.user}>
                        <div>
                            <FaUser size={16}/>
                            Your Name
                        </div>
                        <input type="text" name="name" ref={name} onChange={handleChangeName} />
                    </label>
                    <label className={style.user}>
                        <div>
                            <MdEmail size={20}/>
                            Email
                        </div>
                        <input type="email" name="email" ref={email} onChange={handleChangeEmail}/>
                    </label>

                    <label className={style.term}>
                        <input type="checkbox" checked={receiveCheck} onChange={()=>handleReceiveChecked()} />
                        I agree to receive a summary of the survey findings.
                    </label>
                    <label className={style.term}>
                        <input type="checkbox" checked={futureCheck} onChange={hanndleCheckFuture} />
                        I agree to be contacted by Gmoft about future research.
                    </label>

                    <p className= {style.note}>
                        <span>Please note:</span> your name and email address will not be linked with
                        your survey answers.
                    </p>

                </form>
                    <div className={style.action}>
                        <Button tag={'secondary'} width={'38%'} type={'button'} onClickCallback={back}>Back to survey</Button>
                        <Button tag={submit} width={'58%'} type={'submit'} >Submit</Button>
                    </div>
            </div>
            <Footer/>
        </>
    )
}

