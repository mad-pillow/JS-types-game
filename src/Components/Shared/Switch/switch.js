import "./switch.css";

export default function Switch(props) {
  const { unit, option, defaultValue, label = { on: "I", off: "0" } } = props.config;
  const gameConfig = JSON.parse(localStorage.getItem("gameConfig"));
  const checkedValue = gameConfig ? gameConfig[props.config.option] : defaultValue;
  return (
    <label className="switch__container" htmlFor={unit}>
      <input
        id={unit}
        className="switch"
        type="checkbox"
        onChange={() => {
          props.handleSwitch(option);
        }}
        checked={!checkedValue}
      ></input>
      <div className="custom-switch">
        <span className="switch__label">{label.on.toUpperCase()}</span>
        <span className="switch__label">{label.off.toUpperCase()}</span>
      </div>
    </label>
  );
}
