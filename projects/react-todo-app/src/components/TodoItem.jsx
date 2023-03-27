import styles from '@/styles/TodoItem.module.scss';
import { useState } from 'react';

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {

	const[editing, setEditing] = useState(false);

	const handleEditing = () =>{
		setEditing(true);
	}

	let viewMode = {}
	let editMode = {}
	if(editing){
		viewMode.display = 'none';
	}
	else{
		editMode.display = 'none';
	}

	const completedStyle = {
		fontStyle: 'italic',
		color: '#595959',
		opacity: 0.4,
		textDecoration: 'line-through',
	  };
	
	  const handleUpdatedDone = (event) =>{
		if(event.key === 'Enter'){
			setEditing(false);
		}
	  }

	return (
		<li className={styles.item}>
			<div className={styles.content} style={viewMode}>
				<button onClick={handleEditing}>Edit</button>
				<button onClick={() => delTodo(itemProp.id)}>Delete</button>
				<input type='checkbox' checked={itemProp.completed} onChange={() => handleChange(itemProp.id)} />
				<span style={itemProp.completed ? completedStyle: null}>
					{itemProp.title}
				</span>
			</div>
			<input
			type="text"
			value={itemProp.title}
			className={styles.textInput}
			style={editMode}
			onChange = {(e) => setUpdate(e.target.value, itemProp.id)}
			onKeyDown={handleUpdatedDone}
			/>
		</li>
	)
}
export default TodoItem
