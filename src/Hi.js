import React from 'react'

export default class Hi extends React.Component{
    constructor()
    {
        super();
        this.state={str:""}
    }
    handler=(event)=>{
        this.setState({str:"Hello Beautiful !"});
    }
    render()
    {
        return(
            <>
            <p>Hii {this.props.name} !! </p>
            <input type="button" value="click on me" onClick={this.handler}/>
            </>
        );
    }
}