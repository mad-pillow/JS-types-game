import "./counter.css";

export default function Counter(props) {
  const timeFormatter = Intl.NumberFormat("GB", { minimumIntegerDigits: 2 });
  const lang = props.langEng ? "en" : "ru";

  let minsLeft = timeFormatter.format(parseInt(props.timeLeft / 60));
  let secsLeft = timeFormatter.format(props.timeLeft - minsLeft * 60);
  let timeLeft = "";

  if (props.timerIsOn) {
    if (props.timeLeft > 0) {
      minsLeft = timeFormatter.format(parseInt(props.timeLeft / 60));
      secsLeft = timeFormatter.format(props.timeLeft - minsLeft * 60);
      timeLeft = `${minsLeft}:${secsLeft}`;
    } else {
      timeLeft = "00:00";
    }
  } else {
    timeLeft = <span>&infin;</span>;
  }
  return (
    <div className="counter__container">
      <div className="counter__timer">
        {props.content.counter.timeLeft[lang] + ": "}
        <span>{timeLeft}</span>
      </div>
      <h2 className="counter__item">
        {props.content.counter.totalCorrect[lang]}: {props.totalCorrect}
      </h2>
      <h2 className="counter__item">
        {props.content.counter.totalIncorrect[lang]}: {props.totalIncorrect}
      </h2>
    </div>
  );
}
