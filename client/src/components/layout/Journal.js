import React from "react";
import Button from "../partials/Button";

const Journal = () => {
    const today = new Date().toLocaleDateString()
  return (
    <div className="journal-component">
      <h2>{today}</h2>
      <form className="journal-form">
        <input
          className="input"
          id="title-input"
          type="text"
          name="myInput"
          placeholder="Title"
          required
        />
        <input
          className="input"
          id="tags-input"
          type="text"
          name="myInput"
          placeholder="Tags"
          required
        />
        <textarea
          className="input"
          id="entry-input"
          type="text"
          rows="20"
          name="myInput"
          required
        />
        <div className="btn-container">
          <Button
            text="Save"
            bgColor="green"
            color="#fff"
            fontSize="1.5rem"
            margin="1rem"
          />
          <Button
            text="Cancel"
            bgColor="red"
            color="#fff"
            fontSize="1.5rem"
            margin="1rem"
          />
        </div>
      </form>
    </div>
  );
};

export default Journal;
