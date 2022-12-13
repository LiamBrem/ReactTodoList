import Item from "./Item";

export default function List(props) {

  return (
    <ul>
      {props.todos.map((task) => (
        <li>
            <Item name={task.name} key={task.id} delItem={props.delItem}/>
        </li>
      ))}
    </ul>
  );
}
