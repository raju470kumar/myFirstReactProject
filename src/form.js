import React from 'react'

export default class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            user: null,
            pass: null
        }
    }
    submit() {
        console.log(this.state);    
            
    }
    render() {
        return (
            <div>
                <h1>Form handling</h1>
                <input type="text" name="user" onChange={(e)=>{this.setState({user:e.target.value})}} />
                <br /><br />
                <input type="password" name="pass" onChange={(e)=>{this.setState({pass:e.target.value})}} />
                <br /><br />
                <button onClick={()=>this.submit()}>Submit</button>
            </div>
        )
    }
}