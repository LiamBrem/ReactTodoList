import Item from "./Item";

export default function List(props) {
  const taskList = props.todos.map((task) => (
    <Item id={task.id} name={task.name} completed={task.completed} />
  ));

  return (
    <ul>
      {props.todos.map((task) => (
        <li>{task.name}</li>
      ))}
    </ul>
  );
}
