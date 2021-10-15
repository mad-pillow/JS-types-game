import './button.css';

export default function Button(props) {
  const question = props.tasks[props.currentQuestionNo];
  const answer = props.tasks[props.currentQuestionNo].allResults[props.index];
  return (
    <div className="gamepad__btn" onMouseUp={(e) => {
      props.handlePassedTask(e, question, answer);      
    }
    }>
      <span className="gamepad__btn-text">{answer}</span>
    </div>
  )
}
