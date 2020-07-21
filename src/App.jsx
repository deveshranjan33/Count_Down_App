import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      deadline : 'December 15, 2020'
    }

  }
  changeDeadline() {
    this.setState({deadline : 'November 15, 2020'});
  }
  render() {
    return (
      <div>
        <h2 class="header">Count Down App</h2>
        <h3 class="header1" color="blue" >
          CountDown To {this.state.deadline}
        </h3>
        <br/>
        <div className="row">
          <div color="red" className="offset-4 col-sm-1 txt">Days: 14</div>
          <div color="red" className="col-sm-1 txt">Hours: 30</div>
          <div color="red" className="col-sm-1 txt">Minutes: 15</div>
          <div color="red" className="col-sm-1 txt">Seconds: 20</div>
        </div>
        <br/>
        <div color="purple" class="offset-4 col-sm-3 txt">Enter the Date:-</div>
        <br/>
        <div className="row">
          <div className="form-group offset-4 col-sm-3">
            <input placeholder="Date" class="form-control" type="text"></input>
          </div>
          <div class="col-sm-1">
            <button onClick={() => this.changeDeadline()} class="btn btn-">
            Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
