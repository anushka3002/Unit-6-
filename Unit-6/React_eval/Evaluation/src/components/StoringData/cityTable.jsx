import { Link } from "react-router-dom";

export const CityTable = ({ deleteCity,data }) => {
  return (
    <table>
    <tr>
      <td>{data.id}</td>
      <td>{data.country}</td>
      <td>{data.city}</td>
      <td>{data.population}</td>
      <td>
      <Link to={`/update/${data.id}`}><button>Edit it</button></Link>
      </td>
      <td>
        <button onClick={()=>deleteCity(data.id)}>Delete</button>
      </td>
    </tr>
    </table>
  );
};