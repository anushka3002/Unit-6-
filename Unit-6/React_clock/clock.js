// const root = ReactDOM.createRoot(document.getElementById('root'));

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   root.render(<Clock date={new Date()} />);
// }

// setInterval(tick, 1000);

class Clock extends React.Component{
    constructor(props){
    super(props);
    this.state={date: new Date()}
    }
    render(){
        return(
            <div>
            <h1>Hello I am clock</h1>
            <h2>It is {this.state.data.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Clock/>)