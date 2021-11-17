import "./modal.css";
import React, { Component } from "react";

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.refreshInput = this.refreshInput.bind(this);
  }

  refreshInput() {
    this._input.focus();
    this._input.value = "";
  }

  render() {
    return (
      <div className={this.props.modalIsVisible ? "modal__container modal__container--visible" : "modal__container"}>
        <div className="modal__window">
          <h2 className="modal__title">Wow!</h2>
          <p className="modal__text">
            {`You have just passed the test of total ${this.props.tasksAmount} questions${
              this.props.totalCorrect === this.props.tasksAmount
                ? ". All answers are correct."
                : ` with ${this.props.totalCorrect} correct and ${this.props.totalIncorrect} incorrect answers.`
            }`}
          </p>
          <p className="modal__text">{`Your score is ${this.props.getGameScore()}.`}</p>
          <div
            className={this.props.totalIncorrect === 0 ? "modal__table-container--invisible" : "modal__table-container"}
          >
            <table className="modal__table">
              <caption>Questions with wrong answers are listed below:</caption>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Question</th>
                  <th>Correct answer</th>
                </tr>
              </thead>
              <tbody>
                {this.props.wrongAnswers.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.formula}</td>
                      <td>{item.correctAnswer}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <form
            className="modal__submit-score-form"
            onSubmit={e => {
              this.props.handleSubmitScore(e);
              this.refreshInput();
            }}
          >
            <label className="modal__name-label" htmlFor="modal__name-input">
              Enter your name and submit your result
              <input
                id="modal__name-input"
                onChange={e => this.props.handlePlayerName(e.target.value)}
                ref={e => (this._input = e)}
              ></input>
            </label>
            <button className="modal__submit-btn">Submit score</button>
          </form>
        </div>
      </div>
    );
  }
}
