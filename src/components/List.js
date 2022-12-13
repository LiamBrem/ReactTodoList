import Item from "./Item";

export default function List(props) {

  return (
    <ul>
      {props.todos.map((task) => (
        <li key={task.id}>
            <Item name={task.name}/>
        </li>
      ))}
    </ul>
  );
}
