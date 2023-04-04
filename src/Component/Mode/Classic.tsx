import React from "react";
import "../../App.css";
import { generateHexes, generateARandNum } from "../../helper";

type DefaultStatus = {
  correct: boolean;
  showIncorrect: boolean;
  showCorrect: boolean;
};

export const Classic = () => {
  const defaultStatus: DefaultStatus = {
    correct: false,
    showIncorrect: false,
    showCorrect: false,
  };
  const [correctHex, setCorrectHex] = React.useState<string | null>(null);
  const [listOfHexes, setListOfHexes] = React.useState<Array<string>>([]);
  const [status, setStatus] = React.useState<DefaultStatus>(defaultStatus);

  React.useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    const randNum = generateARandNum();
    const hexes = generateHexes();

    if (status?.correct) {
      timer = setTimeout(() => {
        setCorrectHex(hexes[randNum]);
        setListOfHexes(hexes);
        setStatus(defaultStatus);
      }, 1000);
    } else {
      setCorrectHex(hexes[randNum]);
      setListOfHexes(hexes);
      setStatus(defaultStatus);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [status?.correct]);

  const userGuess = (guess: string) => {
    if (guess === correctHex)
      setStatus({
        correct: true,
        showIncorrect: false,
        showCorrect: true,
      });
    else
      setStatus({
        correct: false,
        showIncorrect: true,
        showCorrect: false,
      });
  };

  return (
    <>
      <h1>Guess the Hex</h1>
      <div
        className="BoxOfColor"
        style={{ backgroundColor: `${correctHex}` }}
      ></div>
      <div className="Buttons">
        {listOfHexes.map((color) => (
          <button
            key={color}
            value={color}
            disabled={status.showCorrect}
            onClick={({ target }) =>
              userGuess((target as HTMLButtonElement).value)
            }
          >
            {color}
          </button>
        ))}
      </div>
      {status.showIncorrect && <div className="Incorrect">Wrong Answer</div>}
      {status.showCorrect && <div className="Correct">Correct Answer</div>}
    </>
  );
};
