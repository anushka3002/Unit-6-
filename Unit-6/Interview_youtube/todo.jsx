import { useEffect, useState } from "react";
import "./App.css";
function Todod() {
  const URL = "https://jsonplaceholder.typicode.com/todos";
  const [todo, setTodo] = useState([]);
  let DeleteTodo = (i) => {
    setTodo((prev) => prev.filter((e, id) => i !== e.id));
  };
  let CompletedTask = () => {
    setTodo((prev) => prev.filter((e, id) => e.completed !== true));
  };
  let Rearrange = () => {
    console.log("test");
    setTodo((prev) => prev.sort((a, b) => b.completed - a.completed));
  };
  async function getdata() {
    let res = await fetch(URL);
    let data = await res.json();
    setTodo(data);
    console.log(data);
  }
  return (
    <div className="App">
      <button
        onClick={() => {
          getdata();
        }}
      >
        GET DATA
      </button>
      <div>
        <button>captialize</button>
        <button
          onClick={() => {
            Rearrange();
          }}
        >
          Rearrange
        </button>
        <button
          onClick={() => {
            CompletedTask();
          }}
        >
          Clear
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((e, i) => {
            return (
              <tr key={e.id}>
                <td> {e.id}</td>
                <td>{e.title}</td>
                <td>{e.completed ? "yess" : "no"}</td>
                <td>
                  <button
                    onClick={() => {
                      DeleteTodo(e.id);
                    }}
                  >
                    x
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Todod;
