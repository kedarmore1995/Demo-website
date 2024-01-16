import React, { useState } from 'react';

export default function TextFrom(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleCopyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleSentenceCase = () => {
        let camelCaseText = text
            .split(' ')
            .map(function (word, index) {
                // First character upper case else lower case
                return word.charAt(0)
                    .toUpperCase() + word.slice(1)
                        .toLowerCase();
            })
            .join(' ');
        setText(camelCaseText);
    };


    const downloadTextFile = (textOutput) => {
        const file = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'textFile.txt';
        link.click();
    };

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("")
    return (
        <>
            <div className="container" style = {{color: props.mode==='dark'?'white':'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control " value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <div className="d-flex">
                    <button className="btn btn-success" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-success mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-success mx-2" onClick={handleSentenceCase}>Convert to CamelCase</button>
                    <button className="btn btn-success mx-2" onClick={downloadTextFile}>Download Text File</button>
                    <button className="btn btn-success mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
                </div>
                <button className="btn btn-primary my-2" onClick={handleCopyText}>Copy text</button>

                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

            </div>
            <div className="container my-2" style={{color: props.mode==='dark'?'white':'black' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>

                <h2>Preview</h2>
                <p>{text.length>0?text: "Enter text into text box above to preview"}</p>
            </div>

        </>
    );
}
