import "./intro.css";

export default function Intro(props) {
  const lang = props.langEng ? "en" : "ru";
  return (
    <div className="intro__container section-container">
      <h2 className="intro__title section-title">{props.content.intro.title[lang]}</h2>
      <p className="intro__text">{props.content.intro.text[lang]}</p>
      <ol className="intro__list">
        <li className="intro__item">{props.content.intro.item1[lang]}</li>
        <li className="intro__item">{props.content.intro.item2[lang]}</li>
        <li className="intro__item">{props.content.intro.item3[lang]}</li>
        <li className="intro__item">{props.content.intro.item4[lang]}</li>
      </ol>
      <button
        className="intro__start-btn"
        onClick={() => {
          window.location = "/#/game";
        }}
      >
        {props.content.intro.btn[lang]}
      </button>
    </div>
  );
}
