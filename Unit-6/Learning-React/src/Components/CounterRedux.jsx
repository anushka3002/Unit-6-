import { useDispatch, useSelector } from "react-redux"
import {store} from "../Redux/store"
import { addCount } from "../Redux/action"

export const CounterRedux=()=>{
    const {count}= useSelector((store)=>store.count)
    const dispatch = useDispatch()
    return(
        <>
        <h2>{count}</h2>
        <button onClick={()=>{
            dispatch((addCount(1)))
        }}>Inc</button>
        <button onClick={()=>{
            dispatch((addCount(-1)))
        }}>Dec</button>
        </>
    )
}