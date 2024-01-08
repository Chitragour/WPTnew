import React from "react";
import EduDetails from "./EduDetails";
export default class StudentData extends React.Component{
    constructor()
    {
        super()
        this.state={flag:false}
    }
   handler=(e)=>{
        this.setState({flag:e.target.checked})
   }
    render()
    {
        return(
           <div>
            <p>Name:Chitra Gour</p>
            <p>Email:chitra@chitra</p>
            <p>DOB : 13/07/2001</p>
            Educational Details:<input type="checkbox" onClick={this.handler}/>
            {this.state.flag?<EduDetails></EduDetails>:""}
           </div> 
        )
    }

    

}