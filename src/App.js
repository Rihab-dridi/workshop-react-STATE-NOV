import React from "react";
import "./App.css";
import Counter from "./components/counter";
import { Button } from "react-bootstrap";

class App extends React.Component {
    //step1: declare a dynamic data + initialvalue=true
    //step2: state management : true==> false/ false==> true 
  
  //phenomene cligneton: 2 parts 
  //step1: declare a boolean dynamic variable 

    constructor(props) {
    super(props);
    this.state={
      show:true
    }
  }
showHandler=()=>{
  this.setState({
    show:!this.state.show
  })
}



  render() {
    return (
      <div className="App">
        <h1>Workshop state </h1>
        <Button variant="danger" onClick={this.showHandler} >{this.state.show? "HIde": "show" } </Button>
{
  this.state.show&& 
  <Counter />
}
        
      </div>
    );
  }
}
export default App;
//ex
//im
//call 