import SubmitForm from "./SubmitForm";
import List from "./List";
import Item from "./Item";

import React, { useState } from "react";

export default function App(props) {
  //sets default value for tasks as props.tasks
  //<setTasks> is the method used to change it
  const [tasks, setTasks] = useState(props.tasks);

  //stores an object in newtask
  function addTask(name) {
    const newTask = { id: "id", name, completed: false };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">  
      <header className="App-header">
        <h1>Todo List</h1>
      </header>

      <SubmitForm addTask={addTask} />

      <List todos={tasks} />

    </div>
  );
}
