import React from 'react';
import WordItem from './WordItem'


function WordList({exception, words = []}) {

    //console.log(words);

    if (exception === "definitions") {

        const WordItems = words.map((word) =>
            <WordItem
                key={word}
                word={word.definition}/>
        );

        return (
            <div style={{paddingLeft: "300px"}}>
                {WordItems}
            </div>
        )
    } else {

        if (words.length === 0) {

            const WordItems =
                <WordItem
                    word="Мы ничего не смогли подобрать к данному слову"/>
            ;

            return (
                <div style={{paddingLeft: "300px"}}>
                    {WordItems}
                </div>
            )
        } else {

            console.log(words);

            const WordItems = words.map((word) =>
                <WordItem
                    key={word}
                    word={word}/>
            );

            return (
                <div style={{paddingLeft: "300px"}}>
                    {WordItems}
                </div>
            )
        }
    }
}


export default WordList;