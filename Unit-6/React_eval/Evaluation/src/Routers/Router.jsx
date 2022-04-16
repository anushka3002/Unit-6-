import {Route, Routes} from 'react-router-dom'
import {AddCountry} from "../components/AddCountry/addCountry"
import {AddCity} from "../components/AddCity/addCity"
import {Homepage} from "../components/Homepage/Homepage"
import {CityUpdate} from  "../components/Cityupdate/cityupdate"

export const AllRouters=()=>{
    return(
        <div>
          
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route exact path="/add-country" element={<AddCountry/>}/>
                <Route exact path="/add-city" element={<AddCity/>}/>
                <Route path="/update/:id" element={<CityUpdate />} />
            </Routes>
        </div>
    )
}