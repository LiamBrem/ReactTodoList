import React, { useState } from "react";

export default function SubmitForm(props) {
  // the initial value of name is ""
  const [name, setName] = useState("");

    //called whenever the text input is changed
    //changes the value of name to whatever is in the text field
  function handleChange(e) {
    setName(e.target.value);
  }

  //called when the form is submitted
  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        <label htmlFor="new-todo-input">Add an item:</label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
