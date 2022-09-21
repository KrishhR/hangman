import React from "react";
import "./HangMan.css";

const HangMan = ({ errors, winner }) => {
  return (
    <svg height="370" width="350" className="figure-container">
      {/* Hanging Pole */}
      <line x1="0" y1="330" x2="236" y2="330"></line>
      <line x1="59" y1="0" x2="59" y2="330"></line>
      <line x1="139.4" y1="53.5" x2="139.4" y2="0"></line>
      <line x1="58" y1="4" x2="139.4" y2="4"></line>

      {(!winner) ? (
        <>
          {errors > 0 && (
            <>
              {/* Hangman face */}
              <circle cx="139.4" cy="89.1" r="35.6"></circle>

              {/* Hangman eyes */}
              <line x1="122.9" y1="83.4" x2="131.1" y2="91.6"></line>
              <line x1="122.6" y1="91.9" x2="131.6" y2="82.9"></line>
              <line x1="147" y1="83.5" x2="155.3" y2="91.8"></line>
              <line x1="146.8" y1="92" x2="155.8" y2="83"></line>

              {/* Hangman mouth */}
              <path d="M126.4,106.5c0-1.8,5.6-3.2,12.4-3.2"></path>
              <path d="M150.9,106.5c0-1.8-5.6-3.2-12.4-3.2"></path>
            </>
          )}

          {/* Hangman body */}
          {errors > 1 && (
            <line x1="139.4" y1="124.7" x2="139.4" y2="218.7"></line>
          )}

          {/* Hangman hands */}
          {errors > 2 && (
            <line x1="139.4" y1="133.9" x2="121.6" y2="212.4"></line>
          )}

          {errors > 3 && (
            <line x1="139.4" y1="134.3" x2="154.2" y2="210.8"></line>
          )}

          {/* Hangeman legs */}
          {errors > 4 && (
            <line x1="139.4" y1="218.7" x2="167.5" y2="291.4"></line>
          )}

          {errors > 5 && (
            <line x1="139.4" y1="218.7" x2="114.2" y2="299.3"></line>
          )}
        </>
      ) : (
        <>
          {/* Happy Hangman face */}
          <circle cx="167" cy="119.9" r="35.6"></circle>

          {/* Happy Hangman hands */}
          <line x1="167" y1="169" x2="231.8" y2="119.7"></line>
          <line x1="167" y1="169" x2="92.8" y2="119.4"></line>

          {/* Happy Hangman body */}
          <line x1="167" y1="155.5" x2="167" y2="249.4"></line>

          {/* Happy Hangman legs */}
          <line x1="167" y1="249.4" x2="180.4" y2="330.5"></line>
          <line x1="167" y1="249.4" x2="142.4" y2="330.5"></line>

          {/* Happy Hangman mouth */}
          <path d="M151.8,133.7c0,4.2,6.9,7.7,15.4,7.7"></path>
          <path d="M182.2,133.7c0,4.2-6.9,7.7-15.4,7.7"></path>

          {/* Happy Hangman Happy Eyes */}
          <circle cx="150" cy="110.9" r="4"></circle>
          <circle cx="180" cy="110.9" r="4"></circle>
        </>
      )}
    </svg>
  );
};

export default HangMan;
