import React from 'react';

import controlsStyles from '../styles/controls.module.css'
import countries from './scripts/countries'


function TranslatorControls({
    fromLanguage,
    handleSetFromLanguage,
    toLanguage,
    handleSetToLanguage
}) {

    function fillLanguageOptions() {
        return Object.keys(countries).map((country_code) => { 
            return <option value={country_code} key={country_code}>{countries[country_code]}</option>;
        })
    }

    function swapLanguages(fromLang, toLang) {
        handleSetToLanguage(fromLang);
        handleSetFromLanguage(toLang);
    }

    return (
        <div className={controlsStyles.controls}>
            <div className={controlsStyles.fromGroup}>
                <div className={controlsStyles.icons}>
                    <i className="fas fa-volume-up"></i>
                    <i className="fas fa-copy"></i>
                </div>
                <select 
                    value={fromLanguage}
                    onChange={e => (handleSetFromLanguage(e.target.value))}
                >
                    {fillLanguageOptions()}
                </select>
            </div>
            <i className="fas fa-exchange-alt" 
            onClick={e => (swapLanguages(fromLanguage, toLanguage))}></i>
            <div className={controlsStyles.toGroup}>
                <select
                    value={toLanguage}
                    onChange={e => {handleSetToLanguage(e.target.value)}}
                >
                    {fillLanguageOptions()}
                </select>
                <div className={controlsStyles.icons}>
                    <i className="fas fa-volume-up"></i>
                    <i className="fas fa-copy"></i>
                </div>
            </div>
        </div>
    )
}

export default TranslatorControls;