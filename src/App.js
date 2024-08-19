// src/App.js
import React, { useState } from "react";
import { translateToMorse, translateToEnglish } from "./morseCode";
import "./App.css";

function App() {
  const [englishText, setEnglishText] = useState("");
  const [morseText, setMorseText] = useState("");

  const handleEnglishChange = (e) => {
    const text = e.target.value;
    setEnglishText(text);
    setMorseText(translateToMorse(text));
  };

  const handleMorseChange = (e) => {
    const morse = e.target.value;
    setMorseText(morse);
    setEnglishText(translateToEnglish(morse));
  };

  return (
    <div className="App">
      {/* Background Polka Dots */}
      <div className="polka-dot"></div>
      <div className="polka-dot"></div>
      <div className="polka-dot"></div>
      <div className="polka-dot"></div>
      <div className="polka-dot"></div>
      <div className="polka-dot"></div>
      <div className="polka-dot"></div>
      <div className="polka-dot"></div>
      <div className="polka-dot"></div>
      <div className="polka-dot"></div>

      {/* Background Stick */}
      <div className="stick"></div>
      <div className="stick"></div>
      <div className="stick"></div>
      <div className="stick"></div>
      <div className="stick"></div>
      <div className="stick"></div>
      <div className="stick"></div>
      <div className="stick"></div>
      <div className="stick"></div>
      <div className="stick"></div>
      <div className="stick"></div>
      <div className="stick"></div>

      {/* Main Content */}
      <div className="box left-box">
        <h2>Morse to English</h2>
        <textarea
          value={morseText}
          onChange={handleMorseChange}
          placeholder="Enter Morse code here..."
        />
        <div className="output">{englishText}</div>
      </div>
      <div className="box right-box">
        <h2>English to Morse</h2>
        <textarea
          value={englishText}
          onChange={handleEnglishChange}
          placeholder="Enter English text here..."
        />
        <div className="output">{morseText}</div>
      </div>
    </div>
  );
}

export default App;
