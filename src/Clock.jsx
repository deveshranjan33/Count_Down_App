import React,{ Component } from 'react';
import './App.css';



class Clock extends Component {

  constructor(props) {
    super(props);
    this.state= {
      days : 0,
      hours : 0,
      minutes : 0,
      seconds : 0
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline),1000);
  }

  getTimeUntil(deadline) {
    const time=Date.parse(deadline)-Date.parse(new Date());
    // console.log('time',time);
    const seconds=Math.floor((time/1000)%60);
    const minutes=Math.floor((time/(1000*60))%60);
    const hours=Math.floor((time/(1000*60*60))%24);
    const days=Math.floor((time/(1000*60*60*24)));
    this.setState({days,hours,minutes,seconds});
    // console.log('days',days,'hours',hours,'minutes',minutes,'seconds',seconds);
  }

  render() {
    // this.getTimeUntil(this.props.deadline);
    return (
      <div className="row hll">
        <div className="offset-4 col-sm-1 txt">Days: {this.state.days}</div>
        <div className="col-sm-1 txt">Hours: {this.state.hours}</div>
        <div className="col-sm-1 txt">Minutes: {this.state.minutes}</div>
        <div className="col-sm-2 txt">Seconds: {this.state.seconds}</div>
      </div>
    )
  }
}
export default Clock;
