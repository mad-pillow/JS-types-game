/* eslint-disable no-eval */
import "./app.css";
import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Gamepad from "./Gamepad/Gamepad";
import Counter from "./Counter/Counter";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Helper from "./Helper/Helper";
import Modal from "./Modal/Modal";
import Highscores from "./Highscores/Highscores";
import Intro from "./Intro/Intro";
import HelpMeBtn from "./Counter/HelpMeBtn/HelpMeBtn";
import { content, signs, values } from "../content";
import Options from "./Options/Options";

export default class App extends Component {
  constructor() {
    super();

    this.signs = signs;
    this.values = values;
    this.signHelper = {
      "||": `Оператор "||" - логическое ИЛИ. Приблизительно эквивалентно "a ? a : b". Результат всегда совпадает со значением одного из операндов,
          а не с результатом проверки условия. P.S. "Ложные значения": "", undefined, null, false, +0, -0, NaN`,
      "&&": `Оператор "&&" - логическое И. Приблизительно эквивалентно "a ? b : a". Результат всегда совпадает со значением одного из операндов,
          а не с результатом проверки условия. P.S. "Ложные значения": "", undefined, null, false, +0, -0, NaN`,
      "==": `"==" - Нестрогое равенство. Разрешает преобразование типа.`,
      "===": `"===" - Строгое равенство. Запрещает преобразование типа.`,
    };
    this.tasksAmount = 25;
    this.timeForTask = 6;
    this.timerInterval = 0;
    this.wrongAnswers = [];
    this.content = content;
    this.defaultGameConfig = { langEng: true, timerOn: true, hintsOn: true, noSimpleOn: false, questAmount: 15 };

    this.initialState = {
      helpVisibility: false,
      tasks: this.generateTasks(this.tasksAmount),
      totalTaken: 0,
      totalCorrect: 0,
      totalIncorrect: 0,
      currentQuestionNo: 0,
      isDone: false,
      timeLeft: Math.floor((this.tasksAmount - 1) / 2) * this.timeForTask,
      timeResult: 0,
      playerName: "Player",
      gameConfig: JSON.parse(localStorage.getItem("gameConfig")) || Object.assign({}, this.defaultGameConfig),
    };

    this.state = Object.assign({}, this.initialState);

    this.handlePassedTask = this.handlePassedTask.bind(this);
    this.getRandomQuestion = this.getRandomQuestion.bind(this);
    this.handleSubmitScore = this.handleSubmitScore.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.handleHelpMe = this.handleHelpMe.bind(this);
    this.handlePlayerName = this.handlePlayerName.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.getGameScore = this.getGameScore.bind(this);
    this.handleWheel = this.handleWheel.bind(this);
  }

  handlePlayerName(name) {
    this.setState({ playerName: name });
  }

  handleSwitch(option) {
    const gameConfig = this.state.gameConfig;
    gameConfig[option] = !this.state.gameConfig[option];
    this.setState(gameConfig);
    localStorage.setItem("gameConfig", JSON.stringify(gameConfig));

    this.restartGame();
    clearInterval(this.timerInterval, 1000);
  }

  handleWheel() {
    console.log("handle wheel");
  }

  handleHelpMe() {
    if (this.state.helpVisibility === false && this.state.totalTaken !== 0) {
      this.setState({ timeLeft: this.state.timeLeft - this.timeForTask });
    }
    this.setState({ helpVisibility: !this.state.helpVisibility });
  }

  restartGame() {
    this.setState({ ...this.initialState });
    this.setState({
      tasks: this.generateTasks(this.tasksAmount),
      timeLeft: Math.floor((this.tasksAmount - 1) / 2) * this.timeForTask,
    });
  }

  getGameScore() {
    let gameFactor = 1;
    gameFactor *= this.state.gameConfig.hintsOn ? 0.7 : 1;
    gameFactor *= this.state.gameConfig.timerOn ? 1.5 : 1;
    gameFactor *= this.state.gameConfig.noSimpleOn ? 1.1 : 1;
    return this.state.timeResult > 0 ? Math.ceil(this.state.timeResult * this.state.totalCorrect * gameFactor) : 0;
  }

  handleSubmitScore(e) {
    e.preventDefault();
    const scoreRecords = JSON.parse(localStorage.getItem("scoreRecords")) ?? [];

    scoreRecords.push({
      name: this.state.playerName,
      score: this.getGameScore(),
      date: Date.now(),
    });

    localStorage.setItem("scoreRecords", JSON.stringify(scoreRecords));

    this.restartGame();
    window.location = "/#/highscores";
  }

  handlePassedTask(e, task, answer) {
    this.setState({ helpVisibility: false });

    if (this.state.isDone) {
      return;
    }

    if (this.state.gameConfig.timerOn === true && this.state.totalTaken === 0) {
      this.timerInterval = setInterval(() => {
        this.setState({ timeLeft: this.state.timeLeft - 1 });
        if (this.state.timeLeft <= 0) {
          this.setState({ isDone: true, timeLeft: 0, timeResult: 0 });
          clearInterval(this.timerInterval, 1000);
        }
      }, 1000);
    }

    const taskClone = Object.assign({}, task);
    let totalCorrect = this.state.totalCorrect;
    let totalIncorrect = this.state.totalIncorrect;
    let timeLeft = this.state.timeLeft;
    let totalTaken = this.state.totalTaken + 1;
    let isDone = false;

    taskClone.passed = true;
    taskClone.answer = answer;
    if (answer === taskClone.result) {
      taskClone.correct = true;
      totalCorrect++;
      timeLeft += this.timeForTask;
    } else {
      taskClone.correct = false;
      totalIncorrect++;
      timeLeft -= this.timeForTask;
    }

    isDone = totalTaken === this.tasksAmount ? true : false;
    if (isDone) {
      clearInterval(this.timerInterval, 1000);
    }

    this.setState({
      totalTaken: totalTaken,
      timeLeft: timeLeft,
      timeResult: timeLeft,
      totalCorrect: totalCorrect,
      totalIncorrect: totalIncorrect,
      isDone: isDone,
    });

    let newStateTasks = Array.from(this.state.tasks);
    newStateTasks = newStateTasks.filter(item => {
      return item.formula !== taskClone.formula;
    });
    newStateTasks = [...newStateTasks, taskClone];

    this.wrongAnswers = newStateTasks
      .filter(task => task.correct === false)
      .map(task => {
        return { formula: task.formula, correctAnswer: task.result, yourAnswer: task.answer };
      });

    this.setState({
      tasks: newStateTasks,
    });
  }

  generateTasks(num) {
    const tasks = [
      {
        passed: false,
        correct: null,
        formula: "[] === []",
        result: "false",
        allResults: ["true", "false", "[]", '""'],
        formulaHelper: "Первый простой пример. Ответ на него начнет отсчет времени. Удачи.",
      },
    ];
    for (let i = 0; i < num - 1; i++) {
      const signs = Object.keys(this.signs);
      const sign = signs[Math.floor(Math.random() * signs.length)];
      const value1 = this.values[Math.floor(Math.random() * this.values.length)];
      const value2 = this.values[Math.floor(Math.random() * this.values.length)];
      const formula = [value1, sign, value2].join(" ");

      let formulaHelper = this.signs[sign] || "Погугли, блеа...";

      let result = ["+", "-"].includes(sign) ? eval(`${formula}`) : eval(`(${formula})`);

      if (typeof result === "object" && result !== null && !Array.isArray(result)) {
        result.toString = function () {
          return "{}";
        };
        result.valueOf = function () {
          return 0;
        };
      }

      if (result === "") {
        result = '""';
      } else if (typeof result === "string") {
        result = '"' + result + '"';
      } else if (Array.isArray(result) && Array.isArray(result[0]) && result.length === 1) {
        result = "[[]]";
      } else if (Array.isArray(result)) {
        result = "[" + result + "]";
      } else if (1 / result === -Infinity) {
        result = "-0";
      } else {
        result = `${result}`;
      }

      const falseResults = [];
      let j = 0;
      if (sign === "==" || sign === "===") {
        falseResults.push(result === "true" ? "false" : "true");
        j = 1;
      }

      for (; j < 3; j++) {
        const randomIndex = Math.floor(Math.random() * this.values.length);
        if (falseResults.includes(this.values[randomIndex]) || this.values[randomIndex] === result) {
          j--;
        } else {
          falseResults.push(this.values[randomIndex]);
        }
      }

      tasks.push({
        passed: false,
        correct: null,
        formula: formula,
        result: result,
        allResults: [...falseResults, result],
        formulaHelper,
      });
    }
    return tasks;
  }

  getRandomQuestion() {
    const tasksAmount = this.state.tasks.length;
    const randomQuestionIndex = Math.floor(Math.random() * tasksAmount);
    return this.state.tasks[randomQuestionIndex].passed
      ? this.getRandomQuestion()
      : this.state.tasks[randomQuestionIndex];
  }

  render() {
    return (
      <div className="wrapper">
        <Header
          content={this.content}
          lang={this.state.gameConfig.langEng}
          handleSwitch={this.handleSwitch}
          defaultLang={this.defaultGameConfig.langEng}
        />
        <HashRouter>
          <main className="main-container">
            <Route
              exact
              path="/game"
              render={props => (
                <>
                  <Gamepad
                    isDone={this.state.isDone}
                    tasks={this.state.tasks}
                    currentQuestionNo={this.state.currentQuestionNo}
                    handlePassedTask={this.handlePassedTask}
                    handleCompletedGame={this.handleCompletedGame}
                  />
                  <div className="info-container">
                    <Counter
                      content={this.content}
                      langEng={this.state.gameConfig.langEng}
                      totalCorrect={this.state.totalCorrect}
                      totalIncorrect={this.state.totalIncorrect}
                      timeLeft={this.state.timeLeft}
                      timerIsOn={this.state.gameConfig.timerOn}
                    />
                    <HelpMeBtn handleHelpMe={this.handleHelpMe} hintsOn={this.state.gameConfig.hintsOn} />
                    <Helper
                      formulaHelper={this.state.tasks[this.state.currentQuestionNo].formulaHelper}
                      isVisible={this.state.helpVisibility}
                      handleHelpMe={this.handleHelpMe}
                    />
                  </div>
                </>
              )}
            />
            <Route
              path="/highscores"
              render={props => <Highscores content={this.content} langEng={this.state.gameConfig.langEng} />}
            />

            <Route
              path="/options"
              render={props => (
                <Options
                  content={this.content}
                  langEng={this.state.gameConfig.langEng}
                  handleSwitch={this.handleSwitch}
                  handleWheel={this.handleWheel}
                  defaultGameConfig={this.defaultGameConfig}
                />
              )}
            />

            <Route
              exact
              path="/"
              render={props => <Intro content={this.content} langEng={this.state.gameConfig.langEng} />}
            />
          </main>
        </HashRouter>
        <Footer />
        <Modal
          wrongAnswers={this.wrongAnswers}
          timeLeft={this.timeLeft}
          timeResult={this.state.timeResult}
          totalTaken={this.state.totalTaken}
          totalCorrect={this.state.totalCorrect}
          totalIncorrect={this.state.totalIncorrect}
          tasksAmount={this.tasksAmount}
          modalIsVisible={this.state.isDone}
          handleSubmitScore={this.handleSubmitScore}
          handlePlayerName={this.handlePlayerName}
          getGameScore={this.getGameScore}
        />
      </div>
    );
  }
}
