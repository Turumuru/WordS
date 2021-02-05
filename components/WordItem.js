import React from "react";

const WordItem = (word) => {

    console.log(word);

    if (word.word) return (
        <div style={{paddingTop: "30px"}}>
            • {word.word}
        </div>
    )
    else return (<div>Loading...</div>)
}

export default WordItem;