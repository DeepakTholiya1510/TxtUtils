import React ,{useState} from  'react'



export default function TextForm(props) {
    const[text,setText] = useState('');

    const handleUpClick = ()=>{
        // console.log("UpperCase was Clicked");
        props.showAlert("converted to UpperCase","success");
        let newText = text.toUpperCase();
        setText(newText);
        
    }
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }

    const handleLoClick = ()=>{
        // console.log("LowerCase was Clicked","success");
        props.showAlert("converted to LowerCase","success");
        let new1 = text.toLowerCase();
        setText(new1);
        
    }

    const handleClear = ()=>{
        
        setText('');
        props.showAlert("Text Cleared","success");
    }

  return (
    <>
        
        <h1 style={{color: props.sBtn==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3" >
        
        <textarea  className="form-control" style={{backgroundColor: props.sBtn === 'dark'?'grey':'white',color: props.sBtn==='dark'?'white':'black'
        }} value={text} onChange={handleOnChange} id="TextArea" rows="8"/>

       
       
        </div>
        <div>
        <button className="btn btn-primary me-2" onClick={handleUpClick}>Convert to Uppercase</button>

        <button className='btn btn-primary me-2' onClick={handleLoClick}>Convert to LowerCase</button>
        <button className='btn btn-secondary me-2' onClick={handleClear}>Clear TextField</button>
    

        </div>

        <div className="container my-3" style={{color: props.sBtn==='dark'?'white':'black'}} >
            <h1 >Your Text Summery</h1>
            <p>words {text.split(" ").length} and characters {text.length}</p>
            <p>{0.008* text.split(" ").length} minutes to read this</p>
        </div>

        <div className="container my-3"style={{color: props.sBtn==='dark'?'white':'black'}}>
            <h1>preview</h1>
            <p>{text.length>0?text:"Enter the text in the text field"}</p>
        </div>
    
        

    </>   
    
  )
}
