import React, { PureComponent } from "react";
import "./gamepad.css";
import Button from "./Button/Button";

export default class Gamepad extends PureComponent {
  constructor(props) {
    super(props);

    this.props = props;

    this.answersIndexes = this.randomizeAnswers();
  }

  randomizeAnswers() {
    const randomIndexArray = [];
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * 4);
      if (randomIndexArray.includes(randomIndex)) {
        i--;
      } else {
        randomIndexArray.push(randomIndex);
      }
    }
    return randomIndexArray;
  }

  render() {
    if (!this.props.isDone) {
      this.answersIndexes = this.randomizeAnswers();
    }
    return (
      <div className="gamepad">
        <div className="gamepad__formula">
          <span className="gamepad__formula-text">{this.props.tasks[this.props.currentQuestionNo].formula}</span>
        </div>
        <div className="gamepad__btn-container">
          {this.answersIndexes.map(index => {
            return (
              <Button
                index={index}
                key={index}
                tasks={this.props.tasks}
                currentQuestionNo={this.props.currentQuestionNo}
                handlePassedTask={this.props.handlePassedTask}
                handleCompletedGame={this.props.handleCompletedGame}
                handlePushedBtn={this.props.handlePushedBtn}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
