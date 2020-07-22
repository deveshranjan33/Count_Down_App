import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      deadline : 'January 1, 2021 00:00',
      newDeadline : ''
    }

  }
  changeDeadline() {
    this.setState({deadline : this.state.newDeadline});
  }
  render() {
    return (
      <div>
        <h2 className="header">Count Down App</h2>
        <h3 className="header1">
          CountDown To <span className="spn1">{this.state.deadline}</span>
        </h3>
        <br/>
        <Clock
          deadline={this.state.deadline}
        />
        <br/>
        <div className="offset-4 col-sm-5 div1">Enter the Date (You can add time also in the given format):-</div>
        <br/>
        <div className="row">
          <div className="form-group offset-4 col-sm-3">
            <input placeholder="New Date" className="form-control" type="text"
            onChange={event =>this.setState({newDeadline : event.target.value})} >
            </input>
          </div>
          <div className="col-sm-1">
            <button onClick={() => this.changeDeadline()} className="btn btn-success">
            Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
