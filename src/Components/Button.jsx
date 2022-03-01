import './Button.css';

const Button = (props) => {
  const {text, asleepSelected, inBedSelected, handleCommand} = props;
  const disabled = !asleepSelected || !inBedSelected;

  return (
    <button
      className="Button"
      type="button"
      disabled={disabled}
      onClick={event => handleCommand(event.target.value)}
      >
        {text}
    </button>
  );
}

export default Button;