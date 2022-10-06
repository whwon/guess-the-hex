import React from 'react';
import './App.css';
import { generateHexes, generateARandNum } from './helper.js';

function App() {
  const defaultStatus = {
    correct: false,
    showIncorrect: false,
    showCorrect: false
  }
  const [correctHex, setCorrectHex] = React.useState(null);
  const [listOfHexes, setListOfHexes] = React.useState([]);
  const [status, setStatus] = React.useState(defaultStatus);

  React.useEffect(() => {
    let timer = null;
    const randNum = generateARandNum();
    const hexes = generateHexes();

    if (status?.correct) {
      timer = setTimeout(() => {
        setCorrectHex(hexes[randNum]);
        setListOfHexes(hexes);
        setStatus(defaultStatus);
      }, 1000)
    } else {
      setCorrectHex(hexes[randNum]);
      setListOfHexes(hexes);
      setStatus(defaultStatus);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [status?.correct]);

  const userGuess = (guess) => {
    if (guess === correctHex) setStatus({
      correct: true,
      showIncorrect: false,
      showCorrect: true
    });
    else setStatus({
      correct: false,
      showIncorrect: true,
      showCorrect: false
    });
  }

  return (
    <div className="App">
      <h1>Guess the Hex</h1>
      <div className='BoxOfColor' style={{ backgroundColor: `${correctHex}` }}></div>
      <div className='Buttons'>
        {listOfHexes.map(color => (
          <button
            key={color}
            value={color}
            disabled={status.showCorrect}
            onClick={(e) => userGuess(e.target.value)}
          >
            {color}
          </button>
        ))}
      </div>
      {status.showIncorrect && <div className='Incorrect'>Wrong Answer</div>}
      {status.showCorrect && <div className='Correct'>Correct Answer</div>}
    </div>
  );
}

export default App;
