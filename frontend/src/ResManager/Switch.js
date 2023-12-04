import React, {useState} from "react";
import './Switch.css'
const Switch=()=>{
   // let rec1='nonActive';
    //let rec2='nonActive';

    const [rec1, setrec1]=useState('nonActive');
    const [rec2, setrec2]=useState('closed');
    const openRes=()=>{
        setrec1('open');
       setrec2('nonActive');
        console.log("open")
    }
    const closeRes=()=>{
        setrec1('nonActive');
        setrec2('closed');
        
        console.log("closed")
    }
    return (
        <>
        
        <div className="flex-container">
        <div className={rec1} onClick={openRes}>
            <br></br>
            <h2 className="flex-item">OPEN</h2>
        </div>
        
        <div className={rec2} onClick={closeRes}>
        <br></br>
            <h2 className="flex-item">CLOSE</h2>
        </div>
        </div>
    
        </>
    )

}
export default Switch