import React, { useState } from "react";
import HangMan from "./Componants/HangMan";
import "./App.css";
import Header from "./Componants/Header";
import Ques from "./Componants/Ques";

const App = () => {
  const words = [
    "apple",
    "apricot",
    "banana",
    "cherry",
    "mango",
    "orange",
    "watermelon",
    "peach",
    "papaya",
    "kiwi",
  ];
  let [selectedWord, setSelectedWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  
  let [errors, setErrors] = useState(0);
  let [winner, setWinner] = useState(false);
  let [char, setChar] = useState("");

  return (
    <div>
      <Header />
      <div className="errorBox">
        <p>Error Count: {errors} out of 6</p>
      </div>
      <div className="container-div">
        <Ques
          errors={errors}
          selectedWord={selectedWord}
          char={char}
          setChar={setChar}
          setErrors={setErrors}
          winner={winner}
          setWinner={setWinner}
          
        />
        <HangMan errors={errors} selectedWord={selectedWord} winner={winner} />
      </div>
    </div>
  );
};

export default App;
