import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      countNum: 0
    }
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.changeCountNum.bind(this)}></textarea>
        <div className="counter">{this.state.countNum}</div>
      </div>
    );
  }

  changeCountNum(event) {
    this.setState({
      countNum: event.target.value.length
    })
  }
}

export default App;
