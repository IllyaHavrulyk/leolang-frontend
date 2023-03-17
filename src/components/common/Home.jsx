import React from 'react'
import axios from 'axios';
import { Translator } from './Translator';


const Home = () => {
    let sourceText = React.useRef();
    const [translatedText, setTranslatedText] = React.useState("");


    async function handleFormChange(event) {
        event.preventDefault();
        const translatedText = await translateText();
        setTranslatedText(translatedText);
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
                input: [sourceText.current.value],
                target: "en"
            }
        })

        return translatedText.data.outputs[0].output;
    }
    return (
        <div className='home-section'>
            <Translator />
        </div>
    )
}


export default Home;