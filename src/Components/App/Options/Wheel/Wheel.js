import React, { Component } from "react";
import "./wheel.css";

export default class Wheel extends Component {
  render() {
    return (
      <div>
        <label htmlFor="wheel">
          <div className="custom-wheel__container">
            <div className="custom-wheel__ruler"></div>
          </div>
          <input
            type="range"
            ref={e => (this._range = e)}
            id="wheel"
            min="5"
            max="30"
            step="5"
            defaultValue={this.props.defaultValue}
            onChange={this.props.handleWheel}
          ></input>
        </label>
      </div>
    );
  }
}
