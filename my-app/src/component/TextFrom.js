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
    const downloadTextFile = (textOutput) => {
        const file = new Blob([text], {type: 'text/plain'});
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
            <div className='container'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <div class="d-flex">
                    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-2" onClick={downloadTextFile}>Download Text File</button>
                    <button className="btn btn-primary ms-auto" onClick={handleClearClick}>Clear Text</button>
                </div>
            </div>
            <div className="container my-2">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    );
}
