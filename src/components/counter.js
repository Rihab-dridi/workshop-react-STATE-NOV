import React from "react";
import { Button } from "react-bootstrap";

class Counter extends React.Component {
  //step1: create dynamic data == create the state object(this.state )
  //step2: state management: we decide how our state is going to change 
x=10
name='salim'

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name:null
    };
  }

  incrementHandler=()=>{
      this.setState({
          counter: this.state.counter +1 // the updated counter= the current counter +1 
      })
  }

  render() {
    return (

      <div>
          {console.log(this.state.counter)}
        <Button variant="danger">Show</Button>
        <div>
          <Button variant="success" onClick={this.incrementHandler} >+</Button>
          <Button variant="primary">{this.state.counter}</Button>
          <Button variant="success">-</Button>
        </div>
      </div>
    );
  }
}
export default Counter;
