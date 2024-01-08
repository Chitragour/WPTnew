import React from "react";
export default class ULCR extends React.Component{
    constructor()
    {
        super();
        this.state={org:"",rstr:"",str:""};
    }
    revhandler=(e)=>{

        //to check if reverse checkbox is on or not
        let isCheck=e.target.checked;
       
        
        if(isCheck)
        {
            let s=this.state.org;
            let rstr="";
            for(let i=s.length-1;i>=0;i--)
            {
                rstr+=s.charAt(i);
            }
            this.setState({str:rstr,rstr:rstr});
        }else
        {
            this.setState({str:this.state.org});
        }
    }

    radiohandler=(event)=>{
        //to get id of clicked/selected radio button 
        let rid=event.target.id;
        let newstr="";
        switch(rid){
            case 'uc':
                newstr=this.state.str.toUpperCase();
                this.setState({str:newstr});
                break;
            case "lc":
                newstr=this.state.str.toLowerCase();
                this.setState({str:newstr});
                break;
            case "tc":
                let s1=this.state.str.charAt(0).toUpperCase();
                let s2=this.state.str.substring(1).toLowerCase();
                let resr=s1+s2;
                this.setState({str:resr});
                break;
                
            default:break;    
        }
    }
    render()
    {
        return(
            <>
            
            Enter String<input type="text" onBlur={(e)=>{
                this.setState({org:e.target.value,str:e.target.value})
            }}></input>
            <br></br>
            to Reverse : <input type="checkbox" onClick={this.revhandler}/>
            <br></br>
            to Uppercase : <input type="radio" id="uc" name="format" onClick={this.radiohandler}/>
            <br></br>
            to Lowercase : <input type="radio" id="lc" name="format" onClick={this.radiohandler}/>
            <br></br>
            to Titlecase : <input type="radio" id="tc" name="format" onClick={this.radiohandler}/>
            <br></br>
            <p>Output String :  {this.state.str}</p>
         </>

        )
    }
}