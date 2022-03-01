import React, {useState} from "react";

import './App.css';

import calculateScore from './js/utils/calculateScore';

import Header from './Components/Header';
import Dropdown from './Components/Dropdown';
import Button from './Components/Button';
import ScoreDisplay from './Components/ScoreDisplay';

const App = () => {
  const [durationAsleep, setDurationAsleep] = useState(0);
  const [durationInBed, setDurationInBed] = useState(0);
  const [buttonState, setButtonState] = useState({});
  const [scoreDisplayText, setscoreDisplayText] = useState("");

  const handleAsleepSelect = (value) => {
    setDurationAsleep(value);
    let asleepSelected = {"asleep": true};
    setButtonState(buttonState => ({
      ...buttonState,
      ...asleepSelected
    }));
  };

  const handleInBedSelect = (value) => {
    setDurationInBed(value);
    let inBedSelected = {"inBed": true};
    setButtonState(buttonState => ({
      ...buttonState,
      ...inBedSelected
    }));
  };

  const getRandomInteger = (max) => {
    return Math.floor(Math.random() * max);
  }

  const handleCommand = (event) => {
    setscoreDisplayText("Loading...");
    let randomSuccessGenerator = getRandomInteger(3);

    if (randomSuccessGenerator === 0 || randomSuccessGenerator % 2 === 0) {
      setTimeout(() => {
        setscoreDisplayText(`You're sleepy-score is: ${calculateScore(durationInBed, durationAsleep)}`);
      }, 1500)
    } else {
      setTimeout(() => {
        setscoreDisplayText(`Oops... We are sorry, but you're sleepy-score calculation has failed. Please try it again!`);
      }, 1500)
    }

    // TODO: setup onkey events, too
    // TODO: setup mock API
  };


  return (
    <div className="App">
      <Header text={"Sleepy App"} />
      <Dropdown
        label={"Duration asleep"}
        handleSelect={handleAsleepSelect}
        value={durationAsleep}
      />
      <Dropdown
        label={"Duration in bed"}
        handleSelect={handleInBedSelect}
        value={durationInBed}
      />
      <Button
        text={"Calculate"}
        asleepSelected={buttonState.asleep} 
        inBedSelected={buttonState.inBed} 
        handleCommand={handleCommand}
      />
      <ScoreDisplay text={scoreDisplayText} />
    </div>
  );
}

export default App;
