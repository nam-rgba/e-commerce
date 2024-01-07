import { useEffect, useState } from "react";

export default function Question2(){

    const languages=['English','Vietnam','Chinese','Japanese'];
    const [selectedLang, setSelectedLang]=useState([]);
    const [selectAll, setSelectAll]=useState(false);



    const handleLanguageChange = (e)=>{
        const {value, checked}=e.target;
        if(!checked){
            setSelectedLang(selectedLang.filter((lang)=>lang!==value));
            setSelectAll(false);
        }else{
            setSelectedLang([...selectedLang, value]);
        }

    }
    const handleSelectAll = (event) => {
        if (event.target.checked) {
        setSelectedLang(languages);
        } else {
        setSelectedLang([]);
        }
        setSelectAll(!selectAll);
    };

    console.log(selectedLang.length)
    return (
        <div>
            <h2>What languge spoken in you household?</h2>
            <form >

                <label>
                    <input type="text" placeholder="Search..." />
                </label><br/>
                
                <label>
                    <input type="checkbox" onChange={handleSelectAll} checked={selectAll} />
                    Select all
                </label><br/>

                {languages.map((lang) => (
                    <label key={lang}>
                        <input 
                        type="checkbox" 
                        checked={selectedLang.includes(lang)} 
                        value={lang} 
                        onChange={handleLanguageChange} 
                        />
                        {lang}
                    </label>
                ))}
            </form>
        </div>
    )
}