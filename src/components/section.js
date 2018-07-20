import React from "react";
import "./section.css";

export class Section extends React.Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
              id="pb"
            />
          </div>
        </div>
      </div>
    );
  }
}
