import React from "react";
import {axios} from "axios"

export class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todo:[],
            query:""
        }
        this.handleChange=this.handleChange.bind(this)
    }
        handleChange(e){
            console.log(this)
            this.setState({
                query:e.target.value
            })
        }
        
        componentDidMount(){
            axios.get("https://json-server-mocker-masai.herokuapp.com/tasks")
            .then((res)=>
                this.setState({
                todo:res.data
            },
            ()=>
            console.log(this.state)
          )
          )
        }
    render(){
        const {query,todo}=this.state
        return(
            <>
            <div>
                <h1>Todo</h1>
                <input value={query} onChange={this.handleChange} placeholder="add something"></input>
                <button>Add Todo</button>
                <div>
                    {todo?.map((item)=>(
                        <div key={item.id}></div>
                    ))}
                </div>
            </div>
            </>
        )
    }
}