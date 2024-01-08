
import React from "react";
export default class Halfstring extends React.Component{
    constructor(){
        super();
        this.state={half:"default"};
    }
    handler=(e)=>{
        let str=e.target.value;
        let hstr = str.substring(0,str.length/2).toUpperCase();
        this.setState({half:hstr});
    }
    render()
    {
        return(
            <>
            Enter String <input type ="text" onBlur={this.handler}></input>
            <p>{this.state.half}</p>
            </>
        )
    }
}