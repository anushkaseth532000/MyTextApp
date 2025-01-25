import React, {useState} from 'react'

export default function TextApp(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase','success');
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase','success');
    }

    const clearText = () =>{
        let newText = ("");
        setText(newText);
        props.showAlert('Text Cleared','success');
    }

    const copyText = ()=>{
           navigator.clipboard.writeText(text);
        props.showAlert('Text Copied','success');
    }

    const handleSpace = ()=>{
        let newText = text.replace(/\s+/g," ").trim();
        setText(newText)
        props.showAlert('Space Removed','success');
    }

  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="container">
            <div className="mb-3">
                <table>
                    <tr>
                    <td width={1200}> <h1>{props.heading}</h1></td>
                    <td align='center' onClick={copyText}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                    </svg><b>Copy</b></td>

                    <td align='center' onClick={clearText}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eraser" viewBox="0 0 16 16">
                    <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z"/></svg><b>Eraser</b></td>
                   
                    </tr>
                </table>
               
                <textarea placeholder='Enter text' className="form-control mx-1 my-1" id="textbox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white' ,color:props.mode==='dark'?'white':'black'}}>
                </textarea>
                <button  disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1 " type="submit" onClick={handleUpClick}>{props.UCase}
                </button>
                <button disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" type="submit" onClick={handleLoClick}>{props.LCase}
                </button>
                <button disabled={text.length===0} className="btn btn-outline-primary" type="submit" onClick={handleSpace}>{props.RemoveSpace}
                </button>
            </div>
        </div>

        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text and word count </h2>
            <p>{text.trim() === "" ? "0 words and 0 characters" : `${text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and ${text.length} characters`}</p>

            <p>Time taken to read this text {0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text in textbox to preview it."}</p>
        </div>
       
    </div>
  )
}
