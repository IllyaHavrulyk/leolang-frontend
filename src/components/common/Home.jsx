import React from 'react'
import axios from 'axios';


const Home = () => {

    axios({
        method: "post",
        url: "https://api-translate.systran.net/translation/text/translate",
        responseType: "json",
        headers: {
            "Authorization": "Key "
        },
        data: {
            input: ["Всім привіт, я маю синдром дауна."],
            target: "en"
        }
    })
        .catch(error => {
            console.error(error);
        })
        .then(data => {
            console.log(data);
        })
    return (
        <div className='home-section'>
            
            Home</div>
    )
}

export default Home;