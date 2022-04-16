import axios from "axios"
import { useState } from "react"
import { addData } from "../../Redux/action"
import { useDispatch, useSelector } from "react-redux"


export const AddCity=()=>{

    // const [add,setAdd]=useState({
    //     country:"",
    //     city:"",
    //     population:"",
    // })

    // const handleChange=(e)=>{
    //     const {id,value}=e.target
    // }

    // setAdd({
    //     ...add,
    //     [id]:value,
    // })

    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     console.log(add)
    //     axios.post(`http://localhost:3002/data`,add).then(()=>{
    //         alert("Item added")
    //         setAdd({
    //             country:"",
    //             city:"",
    //             population:"",
    //         })
    //     })
    // }

    // const [text,addData] = useState("")
    // const data = useSelector((store)=>store.data)
    // const dispatch= useDispatch();

    return(
        <div>
            <form id="form">
                <div><input type="text" placeholder="Add your city" ></input></div>
                <div><input type="Number" placeholder="Add population of your country" ></input></div>
                <div><input type="text" placeholder="Add your country"></input></div>
                <button>
                    Add Data
                </button>
            </form>
        </div>
    )
}