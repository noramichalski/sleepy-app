import './ScoreDisplay.css';

const ScoreDisplay = (props) => {
  const {text} = props;

  return (
    <div className="ScoreDisplay">
      <div>{text}</div>
    </div>
  );
};

export default ScoreDisplay;