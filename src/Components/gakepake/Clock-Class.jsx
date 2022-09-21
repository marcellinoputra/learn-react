import React from 'react';

class ClockC extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <h1>Ini Make Class</h1>
        <h2>Sekarang Jam: {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default ClockC;
