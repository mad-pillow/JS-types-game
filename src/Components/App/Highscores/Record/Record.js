import "./record.css";

export default function Record(props) {
  const locale = props.lang === "en" ? "en-GB" : "RU";
  const toDate = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dateStr = toDate.format(props.date);

  return (
    <li className="highscores__record" title={dateStr}>
      <span>{`${props.index}. ${props.name}`}</span>
      <span>{props.score}</span>
    </li>
  );
}
