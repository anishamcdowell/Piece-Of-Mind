import React from "react";
import MoodSquare from "./partials/MoodSquare";

const Grid = () => {
  let bgColor = "gray";

  return (
    <div className="grid-container">
      <div className="header">
        <h2>2021</h2>
        <div className="options-container">
            <span><p>Year</p></span>
            <span><p>Month</p></span>
            <span><p>Week</p></span>
            <span><p>Day</p></span>
        </div>
      </div>
      <div className="mood-grid">
        {Array.from({ length: 365 }, () => (
          <MoodSquare bgColor={bgColor} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
