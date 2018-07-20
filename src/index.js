import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/home";
import { Section } from "./components/section";
import { TodoApp } from "./components/todo";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      imsg: "Creations ! !"
    };
  }
  onChangeMsg(newName) {
    this.setState({
      imsg: newName
    });
  }
  onChangeM(newName) {
    this.setState({
      imsg: "Write the Original Name -_-"
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header imsg={this.state.imsg} />

            <h3> May be I ll put a desc here ! </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home
              name={"Avnish"}
              initialAge={21}
              changeM={this.onChangeM.bind(this)}
              changeMesg={this.onChangeMsg.bind(this)}
              initialmsg={this.state.imsg}
            >
              <p>This paragraph is passed from index file to home file.</p>
            </Home>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Section />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
