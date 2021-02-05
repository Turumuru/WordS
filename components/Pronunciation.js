import React, {useEffect, useState} from 'react';
import LayoutComponent from "./layout";
import WordItem from "./WordItem";
import axios from "axios";

function Pronunciation() {

    const [words, Setwords] = useState(
        {
            words: null
        }
    );

    const [searchTerm, setSearchTerm] = useState("");
    const [searTerm, setSearTerm] = useState("");
    const handleChange = event => {
        if (event.key === 'Enter') {
            setSearchTerm(event.target.value);
            setSearTerm(event.target.value);
        }
    };

    console.log(searchTerm);
    console.log(searTerm);

    const options = {
        method: 'GET',
        url: `https://wordsapiv1.p.rapidapi.com/words/${searchTerm}/pronunciation`,
        headers: {
            'x-rapidapi-key': 'cfb212896amsh75e3ffae92b628cp193efdjsnd37a01270ab9',
            'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
        }
    };

    useEffect(() => {
        axios.request(options).then((resp) => {
            console.log(resp.data.pronunciation.all);
            const word = resp.data.pronunciation.all;
            console.log(word);
            Setwords({
                words: word
            });
            setSearchTerm("");
        });
    });

    const wor = words.words;

    if (wor) {

        return (
            <LayoutComponent>

                <div style={{paddingLeft: "300px", paddingTop: "100px"}}>
                    <h1>Произношение Слова {searTerm}</h1>
                    <input
                        style={{backgroundColor: '#4B4747', width: '650px', height: '25px'}}
                        type="text"
                        placeholder={searchTerm}
                        onKeyPress={handleChange}
                    />

                    <WordItem
                        word={wor}
                    />

                </div>



            </LayoutComponent>
        )
    } else {
        return (
            <LayoutComponent>

                <div style={{paddingLeft: "300px", paddingTop: "100px"}}>
                    <h1>Произношение Слова</h1>
                    <input
                        style={{backgroundColor: '#4B4747', width: '650px', height: '25px'}}
                        type="text"
                        placeholder="Search..."
                        onKeyPress={handleChange}
                    />
                </div>

            </LayoutComponent>
        )
    }
}

export default Pronunciation;