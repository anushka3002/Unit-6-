import { ADD_DATA } from "./action";

export const reducer=(store,{type,payload})=>{
    switch(type){
        case ADD_DATA:
            return {...store,count:store.count+payload}
        default:
            return store
    }
}