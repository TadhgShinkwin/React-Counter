import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  reset() {
    this.setState({
      count: 0
    });
  }
  plus() {
    this.setState({
      count: this.state.count + 1
    });
  }

  minus() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div className="container">
        <div className="counters-frame">
          <div className="row">
            <div className="screen">
              <span className="disp">{this.state.count}</span>
            </div>
          </div>
          <div className="row btn-grp">
            <div className="dec-btn">
              <button onClick={e => this.minus(e)}>-</button>
            </div>
            <div className="res-btn">
              <button onClick={e => this.reset(e)}>Reset</button>
            </div>
            <div className="inc-btn">
              <button onClick={e => this.plus(e)}>+</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
