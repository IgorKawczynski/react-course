const TodoItem = ({ itemProp, handleChange, delTodo }) => {
	return (
		<li>
			<button onClick={() => delTodo(itemProp.id)}>Delete</button>
			<input type='checkbox' checked={itemProp.completed} onChange={() => handleChange(itemProp.id)} />
			{itemProp.title}
		</li>
	)
}
export default TodoItem
