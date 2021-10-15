import Switch from "../../Shared/Switch/switch";
import "./options.css";
import Wheel from "./Wheel/Wheel";

export default function Options(props) {
  const lang = props.langEng ? "en" : "ru";
  return (
    <div className="options__container section-container">
      <h2 className="options__title section-title">{props.content.options.title[lang]}</h2>
      <ul className="options__list">
        <li className="options__item">
          <div>{props.content.options.timer[lang]}</div>
          <Switch
            config={{ unit: "timer", option: "timerOn", defaultValue: props.defaultGameConfig["timerOn"] }}
            handleSwitch={props.handleSwitch}
          />
        </li>
        <li className="options__item">
          <div>{props.content.options.hints[lang]}</div>
          <Switch
            config={{ unit: "hints", option: "hintsOn", defaultValue: props.defaultGameConfig["hintsOn"] }}
            handleSwitch={props.handleSwitch}
          />
        </li>
        <li className="options__item">
          <div>{props.content.options.nosimple[lang]}</div>
          <Switch
            config={{ unit: "noSimple", option: "noSimpleOn", defaultValue: props.defaultGameConfig["noSimpleOn"] }}
            handleSwitch={props.handleSwitch}
          />
        </li>
        <li className="options__item">
          <div>{props.content.options.questAmount[lang]}</div>
          <Wheel handleWheel={props.handleWheel} defaultValue={props.defaultGameConfig.questAmount} />
        </li>
      </ul>
    </div>
  );
}
