import { useEffect, useState } from "react";
import style from './question.module.css';
import { addAnswer } from '../../state/surveySlice';
import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
export default function Question2({handleCheckDone}){
    const dispatch = useDispatch();
    const answer = useSelector(state => state.survey.answers);
    const languages=['English','Vietnam','Chinese','Japanese','Spanish','French'];
    const [selectedLang, setSelectedLang]=useState(answer[1]||[]);
    const [selectAll, setSelectAll]=useState(false);


    useEffect(() => {
        if (answer[1]) {
            setSelectedLang(answer[1]);
        }
    }, [answer]);

    useEffect(() => {
        
        dispatch(addAnswer({ questionId: 1, answer: selectedLang })); 
    }, [selectedLang, dispatch]);

    const handleLanguageChange = (e) => {
        const { value, checked } = e.target;
        if (!checked) {
            setSelectedLang(selectedLang.filter((lang) => lang !== value));
        } else {
            setSelectedLang((prevSelectedLang) => [...prevSelectedLang, value]);
        }
        setSelectAll(languages.length === selectedLang.length + 1);
        if(selectedLang.length > 0){
            handleCheckDone(true);
        }
    };

    const handleSelectAll = (event) => {
        if (event.target.checked) {
            setSelectedLang(languages);
        } else {
            setSelectedLang([]);
        }
        setSelectAll(event.target.checked);
    };

    const string = selectedLang.length > 0 ? selectedLang.join(', ') : 'Choose your language';



    return (
        <div>
            <h2>What languge spoken in you household?</h2>
            <form >
                <div className={style.selectedLan}>
                    {string}
                </div>
                <div className={style.languages}>
                    <label className={style.search}>
                        <input type="text" placeholder="Search..." />
                    </label>
                    <label className={style.language}>
                        <input type="checkbox" onChange={handleSelectAll} checked={selectAll} />
                        Select all
                    </label>
                    {languages.map((lang) => (
                        <label key={lang} className={style.language}>
                            <input 
                            type="checkbox" 
                            checked={selectedLang.includes(lang)} 
                            value={lang} 
                            onChange={handleLanguageChange} 
                            />
                            {lang}
                        </label>
                    ))}
                </div>
            </form>
        </div>
    )
}