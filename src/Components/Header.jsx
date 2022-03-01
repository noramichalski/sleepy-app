import './Header.css';

const Header = (props) => {
  const {text} = props;

  return (
    <>
      <h1 className="App-header">
        {text}
      </h1>
      <h2 className="App-sub-header">
        Please, select from below durations to calculate your sleepy-score
      </h2>
    </>
  );
}

export default Header;