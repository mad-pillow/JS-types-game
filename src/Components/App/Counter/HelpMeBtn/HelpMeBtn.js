import "./helpMeBtn.css";
import questionIco from "./question-diamond-fill.svg";

export default function HelpMeBtn(props) {
  return (
    <button
      className={!props.hintsOn ? "help-me-btn help-me-btn--disabled" : "help-me-btn"}
      onClick={props.handleHelpMe}
      style={{ backgroundImage: `url(${questionIco})` }}
    ></button>
  );
}
