import React from "react";
import "./header.css";

export class Header extends React.Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                Antrepriz
              </a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Content</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </nav>
        <h1 className="stylo"> AK {this.props.imsg} </h1>
      </div>
    );
  }
}
