import React from 'react';
import axios from 'axios';

import translatorStyles from '../styles/translator.module.css';
import Controls from './Controls';

function Translator() {
    const [textToTranslate, setTextToTranslate] = React.useState('');
    const [fromLanguage, setFromlanguage] = React.useState('en-GB');
    const [toLanguage, setToLanguage] = React.useState('en-GB');

    function handleSetFromLanguage(fromLanguage) {
        setFromlanguage(fromLanguage);
    }
    function handleSetToLanguage(toLanguage) {
        setToLanguage(toLanguage);
    }

    async function translateText() {
        let translatedText = await axios({
            method: "post",
            url: "https://api-translate.systran.net/translation/text/translate",
            responseType: "json",
            headers: {
                "Authorization": "Key 78b207fd-a1ae-4881-9d91-9d06948cdb54"
            },
            data: {
                input: 'Bonjour',
                target: "uk"
            }
        })
        
        return translatedText.data.outputs[0].output;
    }

    return (
        <div className={translatorStyles.translator}>
            <div className={translatorStyles.wrapper}>
                <div className={translatorStyles.textinput}>
                    <textarea  
                        className={`${translatorStyles.textarea} ${translatorStyles.areaLeft}`}
                        placeholder='Enter text'
                        value={textToTranslate}
                        onChange={e => (setTextToTranslate(e.target.value))}
                    ></textarea>
                    <textarea
                        className={`${translatorStyles.textarea} ${translatorStyles.areaRight}`}
                        placeholder='Translation'
                        readOnly={true}
                        disabled={true}
                    ></textarea>
                </div>
                <Controls
                    fromLanguage={fromLanguage}
                    handleSetFromLanguage={handleSetFromLanguage}
                    toLanguage={toLanguage}
                    handleSetToLanguage={handleSetToLanguage}
                />
            </div>
            <button onClick={translateText}>Translate Text</button>
        </div>
    )
}

export default Translator;