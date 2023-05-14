import styles from "@/styles/TodoItem.module.scss";
import { useState, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useTodosContext } from "@/context/TodosContext";

const TodoItem = ({ itemProp }) => {
  const { handleChange, delTodo, setUpdate } = useTodosContext();
  const editInputRef = useRef(null);
  // const [updateInput, setUpdateInput] = useState(itemProp.title);
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <button onClick={handleEditing}>
          <AiFillEdit style={{ color: "#5e5e5e", fontSize: "20px" }} />
        </button>
        <button onClick={() => delTodo(itemProp.id)}>
          <FaTrash style={{ color: "#5e5e5e", fontSize: "20px" }} />
        </button>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        ref={editInputRef}
        defaultValue={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
export default TodoItem;
