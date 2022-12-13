
export default function Item(props) {
    return (
        <div>
            <input type="checkbox" />
            { props.name }
            <button onClick={props.delItem(props.id)}>x</button>


        </div>

    );
}; 

