import React, { useState } from 'react';


export default function Textform(props) {
    const [text, setText] = useState('Enter some random text');
    const handleOnChange = (event)=>
    {
        console.log("Handle on change");
        setText(event.target.value);
    }
    const handleUpClick = ()=>
    {
      console.log("Uppercase selected");
      let newText = text.toUpperCase();
      setText(newText);
    }
    const handleLoClick = ()=>
    {
      console.log("Lowercase selected");
      let newText = text.toLowerCase();
      setText(newText);
    }
    const handleclearClick = ()=>
    {
      console.log("Clear Text selected");
      let newText = '';
      setText(newText);
    }
  return (
    <div>
    <div className='container' style = {{color : props.mode ==='dark'?'white':'black'}}>
    <div className="mb-3">
    <h1 className='my-3'>{props.heading}</h1>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange} style = {{color : props.mode ==='dark'?'white':'black', backgroundColor: props.mode ==='dark'?'black':'white'}}></textarea>
    <button type="button" className="btn btn-primary my-3" onClick={handleUpClick}>UpperCase</button>
    <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>LowerCase</button>
    <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleclearClick}>Clear Text</button>
  </div>
  <div className='container my-3'>
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>It will take you approximately {0.008* text.split(" ").length} minutes to read</p>
  </div>
    </div>
  </div>
  )
}
