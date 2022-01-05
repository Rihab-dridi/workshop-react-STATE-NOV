import React from "react";
import { Button } from "react-bootstrap";

class Counter extends React.Component {
  //step1: create dynamic data == create the state object(this.state )
  //step2: state management: we decide how our state is going to change
  //step3: link the function to an event: (onClick)
  x = 10;
  name = "salim";

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: null,
      timer: 0,
    };
  }

  incrementHandler = () => {
    this.setState({
      counter: this.state.counter + 1, // the updated counter= the current counter +1
    });
  };

  decrementHandler = () => {
    this.state.counter > 0 &&
      this.setState({
        counter: this.state.counter - 1,
      });
  };

  resetHandler = () => {
    this.setState({
      counter: this.state.counter * 0,
    });
  };
  componentDidMount() {
    console.log("a Node for this component has been added to the Dom ");
  }

  componentDidUpdate() {
    console.log("this Dom Node has been Updated ");
  }

  componentWillUnmount() {
    console.log("this DOM NOde has been removed");
  }
  render() {
    console.log("the component is rendering  ");
    return (
      <div>
        <div className="conterBtns">
          <Button variant="success" onClick={this.incrementHandler}>
            +
          </Button>
          <Button variant="primary" className="w-25">
            {this.state.counter}
          </Button>
          <Button variant="success" onClick={this.decrementHandler}>
            -
          </Button>
        </div>
        <Button variant="secondary" onClick={this.resetHandler}>
          Reset
        </Button>
      </div>
    );
  }
}
export default Counter;
