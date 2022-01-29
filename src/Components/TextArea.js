import React, {useState} from "react";

export default function TextArea(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event)=>{
        // console.log("On chnage handler") ;
        setText(event.target.value);
    }

    //----------CONVERT TO UPPERCASE----------

    const convertToUpper = ()=>{
        // console.log("Clicked",text);
        setText(text.toUpperCase()) ;
        
    }

    //---------CONVERT TO LOWERCASE---------

    const convertToLower  = ()=>{
        setText(text.toLowerCase());
    }
    //---------BOLD THE TEXT---------

    const boldText = ()=>{
        if(document.getElementById('myText').style.fontWeight === "bold"){
            document.getElementById('myText').style.fontWeight = "400"
        }
        else{
            document.getElementById('myText').style.fontWeight = "bold"
        }
        
    
    }

    //---------ITALIC THE TEXT---------

    const italicText = ()=>{
        if(document.getElementById('myText').style.fontStyle === "italic"){
            document.getElementById('myText').style.fontStyle = "normal"
        }
        else{
            document.getElementById('myText').style.fontStyle = "italic"
        }
    
    }

    //---------REMOVE EXTRA SPACES---------
    const removeSpace = ()=>{
       let newString = text.replace(/\s+/g,' ').trim();
        setText(newString);
    }

    //---------COPY TO CLIPBOARD---------
    const copyText = ()=>{
        navigator.clipboard.writeText(text)
        props.show("success","Text Copied to Clipboard")
       
        // alert("Text Copied to Clipboard")
    }

    //---------CLEAR TEXT---------
    const clearText = ()=>{
        setText("");
    }
    
    return (
        <>
        <div className={`container text-${props.textColor}`}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className={`form-control text-${props.textColor}`} id="myText" rows="8" value = {text} onChange = {handleOnChange} placeholder = "Enter your text here" style = {{backgroundColor: props.textColor === 'white'? '#363e49e6':'white'}}></textarea>
            </div>
            <button className="btn btn-primary" onClick = {convertToUpper}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-3" onClick = {convertToLower}>Convert to LowerCase</button>
            <button className="btn btn-primary" id="boldBtn" style={{fontWeight: "bold"}} onClick = {boldText}>Bold</button>
            <button className="btn btn-primary  mx-3"style={{fontStyle: "italic"}} onClick = {italicText}>Italic</button>
            <button className="btn btn-primary"onClick = {removeSpace}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-3"onClick = {copyText} alert= {alert}>Copy</button>
            <button className="btn btn-primary" onClick = {clearText}>Clear Text</button>
            
        </div>
        <div className={`container my-3 text-${props.textColor}`}>
            <h2>Text Summary</h2> <hr />
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>You will take appx. {0.008*text.split(" ").length} minutes to read this </p>
            <h2>Preview: <hr /> </h2>
            <p>{text.length ===0 ? "Write in The Text-Box to Preview here": text}</p>
        </div>
    </>
  );
}
