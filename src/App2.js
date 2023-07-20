import React, { Component } from "react";

class App2 extends Component {
  state = {
    second: 0,
    minute: 0,
    hour: 0,
    btnDisabled: false,
    interval: "",
    intervalsStorage: [],
  };

  startClicked = () => {
    this.setState({
      btnDisabled: true,
    });
    let timer = setInterval(() => {
      const { second, minute, hour } = this.state;
      if (second === 59) {
        if (minute === 59) {
          this.setState({
            second: 0,
            minute: 0,
            hour: hour + 1,
          });
        } else {
          this.setState({
            second: 0,
            minute: minute + 1,
          });
        }
      } else {
        this.setState({
          second: second + 1,
        });
      }
    }, 1000);
    this.setState({
      interval: timer,
    });
  };

  stopClicked = () => {
    clearInterval(this.state.interval);
    this.setState({
      btnDisabled: false,
    });
  };

  intervalClicked = () => {
    const { second, minute, hour, intervalsStorage } = this.state;
    intervalsStorage.push(`${hour}: ${minute}:${second}`);
    this.setState({
      intervalsStorage,
    });
  };

  render() {
    const { second, minute, hour, btnDisabled, intervalsStorage } = this.state;
    return (
      <div>
        <div className="timer-container ">
          <h1 className="mb-4">
            <span>Online</span> StopWatch
          </h1>
          <div className="timer-col">
            <p className="timer-hours">{hour}</p>
            <p className="timer-label">Hours</p>
          </div>

          <div className="timer-col">
            <p className="timer-minutes">{minute}</p>
            <p className="timer-label">Minutes</p>
          </div>
          <div className="timer-col">
            <p className="timer-seconds">{second}</p>
            <p className="timer-label">Seconds</p>
          </div>
        </div>
        <div className="timer-container text-center">
          <div className="timerBtn">
            <button className="btn  btn-success" onClick={this.startClicked}>
              Start
            </button>
          </div>
          <div className="timerBtn">
            <button className="btn  btn-danger" onClick={this.stopClicked}>
              Stop
            </button>
          </div>
          <div className="timerBtn">
            <button className="btn  btn-secondary" onClick={this.intervalClicked} disabled={!btnDisabled}>
              Interval
            </button>
          </div>

          <div className="timerBtn">
            <button className="btn  btn-warning">Clear</button>
          </div>
        </div>
        <div className="timer-container-intervals text-center">
          {intervalsStorage.map((item, ind) => (
            <p>
              {ind + 1}.=&gt; {item}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default App2;
