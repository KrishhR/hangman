import React, { useState } from "react";
import "./Ques.css";

const Ques = ({ errors, selectedWord, setErrors, winner, setWinner }) => {
  let charArr = selectedWord.split("");
  let [correctWord, setCorrectWord] = useState([]);
  console.log(selectedWord);

  const checkChar = (e) => {
    let input = e.target;
    let character = e.target.value;
    let inx = input.id;
    if (character === "") {
      return;
    } else if (charArr[inx] == character.toLowerCase()) {
      input.disabled = true;
      input.style.border = "none";
      input.value = character.toUpperCase();
      setCorrectWord([...correctWord, character]);
    } else {
      if (errors < 6) {
            setErrors(++errors);
      } 
      else {
        ""
      }
    }

    if ((correctWord.length+1) == Array.from(selectedWord).length) {
        console.log("yes");
        setWinner(true);
      }
  };
  return (
    <div className="quesDiv">
      {errors < 6 ? (
        winner ? (
          <>
            <div>
              <h1 style={{ width: "fit-content", margin: "auto" }}>
                Congratulations! You won! 😃
              </h1>
            </div>
          </>
        ) : (
          <>
            <h1>Guess the fruit name correctly to save your Hangman!!</h1>
            <div className="inptDiv">
              {Array(selectedWord.length)
                .fill()
                .map((_, i) => {
                  return (
                    <input
                      type="text"
                      key={i}
                      id={i}
                      className="inpt"
                      maxLength={1}
                      onInput={checkChar}
                    />
                  );
                })}
            </div>
          </>
        )
      ) : (
        <>
          <div>
            <h1 style={{ width: "fit-content", margin: "auto" }}>
              Unfortunately you lost. 😕
            </h1>
          </div>
        </>
      )}
      {/* {(winner==true) ? <>
            <div>
              <h1 style={{ width: "fit-content", margin: "auto" }}>
              Congratulations! You won! 😃
              </h1>
            </div>
          </>:"" } */}
    </div>
  );
};

export default Ques;
