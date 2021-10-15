import "./helper.css";

function Helper(props) {
  return (
    <div
      className={props.isVisible ? "helper__container helper__container--visible" : "helper__container"}
      onClick={props.handleHelpMe}
    >
      <div className="helper">{props.formulaHelper}</div>
    </div>
  );
}

export default Helper;
