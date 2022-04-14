import React from "react"

class Counter extends React.Component{
constructor(props){
    super(props)

    this.state={
        counter:0,
        totalClicks:0
    }
}

handleCounterChange=(value)=>{
    this.setState({
        counter:value+this.state.counter,
        totalClicks:this.state.totalClicks+1
    },
    ()=>console.log(this.state)
    )
    
}

    render(){
        const {title}=this.props
        const {counter}=this.state
        return(
            <div>
                <h1>{title}</h1>
                <h3>{counter}</h3>
                <button onClick={()=>this.handleCounterChange(1)}>Add</button>
                <button onClick={()=>this.handleCounterChange(-1)}>Reduce</button>
                <div>Total clicks = {this.state.totalClicks}</div>
            </div>
        )
    }
}

export {Counter}