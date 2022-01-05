import React from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
    };
  }

  //   timerHandler = () => {

  //   };

  componentDidMount() {
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  }

  render() {
    return (
      <div>
        <h5 onClick={this.timerHandler}>timer </h5>
        <h2>{this.state.timer} </h2>
      </div>
    );
  }
}
export default Timer;
