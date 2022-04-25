import {Routes,Route} from "react-router"
import { Homepage } from "../components/home/home"

export const AllRoutes=()=>{
    <>
    <Routes>
        <Route exact path="/id" element={<Homepage/>}/>
    </Routes>
    </>
}