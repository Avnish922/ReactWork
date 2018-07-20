import React from "react";
import "./home.css";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      imsg: props.initialmsg
    };
  }
  onDecAge() {
    if (this.state.age >= 1)
      this.setState({
        age: this.state.age - 3
      });
    if (this.state.age < 1) {
      this.setState({
        age: this.state.age + 90
      });
    }
  }
  onGreet() {
    alert("Hello, Welcome to React JS framework");
  }
  onChangeMsg() {
    this.props.changeMesg(this.state.imsg);
  }
  onChangeM() {
    this.props.changeM(this.state.imsg);
  }
  onHandleChange(event) {
    this.setState({
      imsg: event.target.value
    });
  }
  render() {
    var text = "Write a Short Bio!";
    return (
      <div className="bgcol">
        <p>
          This is {this.props.name}, aged {this.state.age}
        </p>
        {this.props.children}
        <div className="panel panel-info">
          <div className="panel-heading">
            <strong>Components and Props </strong>
          </div>
          <div className="panel-body">Panel Content</div>
        </div>

        <div className="panel panel-warning">
          <div className="panel-heading">
            <strong>Playing with Events</strong>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-lg-2">
                <button
                  onClick={() => this.onDecAge()}
                  className="btn btn-warning"
                >
                  {" "}
                  <strong>Decrease age</strong>{" "}
                </button>
              </div>
              <div className="col-lg-2">
                <button
                  onClick={() => this.onGreet()}
                  className="btn btn-warning"
                >
                  {" "}
                  <strong>Welcome</strong>{" "}
                </button>
              </div>
              <div className="col-lg-2">
                <button
                  onClick={this.onChangeM.bind(this)}
                  className="btn btn-warning"
                >
                  {" "}
                  <strong>Reality Check</strong>{" "}
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <button
                  onClick={this.onChangeMsg.bind(this)}
                  className="btn btn-warning"
                >
                  {" "}
                  <strong>Update Title</strong>{" "}
                </button>
                <input
                  type="text"
                  value={this.state.imsg}
                  onChange={event => this.onHandleChange(event)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="panel panel-danger">
          <div className="panel-heading">
            <strong>ToDo Utility</strong>
          </div>
          <div className="panel-body">..</div>
        </div>
      </div>
    );
  }
}
