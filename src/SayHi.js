import { useState } from "react";

export default function SayHi(){
    let[msg,setmsg] = useState("");
    function handler(){
        setmsg("Hey beautiful!");
    }
    return(
        <>
        <div>
           
            <input type="button" value="Click me" onClick={handler}></input>
        </div>
        <br>
        </br>
        <p>{msg}</p>
        </>
    );

}