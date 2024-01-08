import React,{useState} from "react";

export default function ShowList(){

    let[tlflag,settl]=useState(false);
    let[olflag,setol]=useState(false);
    let[ulflag,setul]=useState(false);

    let arr=['CHICAGO','PARIS','NEW YORK','ITALY'];
    let[arr2,setarr2]=useState([]);

    function handler(choice)
    {
        switch(choice)
        {
            case "tl":{
                settl(true);
                let arr2=arr.map((element,index)=>{
                    return <tr><td>{index}</td><td>{element}</td></tr>
                })

                setarr2(arr2)

                break;
            }

            case "ol":{
                setol(true);
                let arr2=arr.map((element)=>{
                    return<ol><li>{element}</li></ol>
                })

                setarr2(arr2);

                break;
            }

            case "ul":{
                setul(true);

                let arr2=arr.map((element)=>{
                    return<ul><li>{element}</li></ul>
                })

                setarr2(arr2);
                break;
            }

            default: break;
        }
    }

    return(
        <>
        <div>
            <br></br>
            Table:<input type="radio" name="format" onClick={()=>{handler("tl")}}/>
            <br></br>
            OL:<input type="radio" name="format" onClick={()=>{handler("ol")}}/>
            <br></br>
            UL:<input type="radio" name="format" onClick={()=>{handler("ul")}}/>
            <br></br>
        </div>

        <div>
            {tlflag && <table border="1">{arr2}</table>}
            {olflag && <ol>{arr2}</ol>}
            {ulflag && <ul>{arr2}</ul>}

        </div>
        </>
    );
}