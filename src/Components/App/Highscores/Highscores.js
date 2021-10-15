import "./highscores.css";
import Record from "./Record/Record";

export default function Highscores(props) {
  const scoreRecords = JSON.parse(localStorage.getItem("scoreRecords")) ?? [{ name: "No records" }];
  const lang = props.langEng ? "en" : "ru";

  return (
    <div className="highscores__container section-container">
      <h2 className="highscores__title section-title">{props.content.highscores.title[lang]}</h2>
      <ul className="highscores__list">
        {scoreRecords.map((record, index) => {
          return (
            <Record
              {...props}
              key={index}
              index={index + 1}
              name={record.name}
              score={record.score}
              date={record.date}
            />
          );
        })}
      </ul>
    </div>
  );
}
