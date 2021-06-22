import React from 'react'

export default class state extends React.Component{
    constructor(){
        super();
        console.log("constructor")
        this.state={
            show:true,
            data:null
            // name:'Ravi Goyal'
            // Email:'ravi@nextraone.com',
            // count:0
        }

    }
    // update(){
    //     this.setState({
    //         show:false
    //         // name:'Gitesh Kumar',
    //         // Email:'gitesh@nextraone.com',
    //         // count:this.state.count+1
    //     })
    // }
    componentDidMount(){
        this.setState({data:"updated"})
        console.log("componentDidMount")
    }
    render(){
        console.log("render")
        return(
            <div>
                {
                    this.state.show ?
                    <h1>Ravi Goyal</h1>
                    :null
                }
                 
                 
                {/* <h1>Name : {this.state.name}</h1> */}
                {/* <h1>Email : {this.state.Email}</h1>
                <h1>Click Count : {this.state.count}</h1> */}
                <button onClick={()=>{this.setState({show:!this.state.show})}}>update</button>
            </div>
        )
    }
}

