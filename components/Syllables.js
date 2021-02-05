import React, {useEffect, useState} from 'react';
import LayoutComponent from "./layout";
import WordList from "./WordList";
import axios from "axios";

function Syllables() {

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
        url: `https://wordsapiv1.p.rapidapi.com/words/${searchTerm}/syllables`,
        headers: {
            'x-rapidapi-key': 'cfb212896amsh75e3ffae92b628cp193efdjsnd37a01270ab9',
            'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
        }
    };

    useEffect(() => {
        axios.request(options).then((resp) => {
            console.log(resp.data.syllables);
            const word = resp.data.syllables;
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
                    <h1>Слоги Слова {searTerm}</h1>
                    <input
                        style={{backgroundColor: '#4B4747', width: '650px', height: '25px'}}
                        type="text"
                        placeholder={searchTerm}
                        onKeyPress={handleChange}
                    />
                    <div style={{paddingTop: "20px"}}>
                        {wor.count}
                    </div>
                </div>

                <WordList
                    exception="syllables"
                    words={wor.list}
                />

            </LayoutComponent>
        )
    } else {
        return (
            <LayoutComponent>

                <div style={{paddingLeft: "300px", paddingTop: "100px"}}>
                    <h1>Слоги Слова</h1>
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

export default Syllables;