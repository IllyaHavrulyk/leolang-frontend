import React, { useState, useRef, useEffect } from 'react'
import { countries } from "../scripts/countries";
import "../../styles/Sidebar.scss";
import { v4 as uuidv4 } from 'uuid';

export const Translator = () => {

    const [toLanguage, setToLanguage] = useState("en-GB");
    const toText = useRef();
    const [fromLanguage, setFromLanguage] = useState("en-GB");
    const fromText = useRef(); 
    
    function fillLanguageOptions() {
        return Object.keys(countries).map((country_code) => { 
            return <option value={country_code}  key={uuidv4()}>{countries[country_code]}</option>;
        })
    }

    function handleSelect(e){
        const newToLanguage = e.target.value;
        setToLanguage(newToLanguage)
        console.log(toLanguage);
    }

    function handleInput(e){
        const newToText = e.target.value;
        toText.current.value = newToText;
        console.log("FromText from function", fromText);
    }

    return (
        <div className="container">
            <div className="wrapper">
                <div className="text-input">
                    <textarea spellCheck="false" className="from-text" placeholder="Enter text" onChange={handleInput} ref={fromText} />
                    <textarea spellCheck="false" readOnly disabled className="to-text" placeholder="Translation" ref={toText} />
                </div>
                <ul className="controls">
                    <li className="row from">
                        <div className="icons">
                            <i id="from" className="fas fa-volume-up"></i>
                            <i id="from" className="fas fa-copy"></i>
                        </div>
                        <select value={fromLanguage}>{fillLanguageOptions()}</select>
                    </li>
                    <li className="exchange"><i className="fas fa-exchange-alt"></i></li>
                    <li className="row to">
                        <select value={toLanguage} onChange={handleSelect}>{fillLanguageOptions()}</select>
                        <div className="icons">
                            <i id="to" className="fas fa-volume-up"></i>
                            <i id="to" className="fas fa-copy"></i>
                        </div>
                    </li>
                </ul>
            </div>
            <button>Translate Text</button>
        </div>
    )
}

