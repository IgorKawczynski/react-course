import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useTodosContext } from "@/context/TodosContext";

const InputTodo = () => {
  const { addTodoItem } = useTodosContext();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle("");
      setMessage("");
    } else {
      setMessage("Please add item");
    }
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="input-text"
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
        />
        <button className="input-submit">
          <FaPlusCircle style={{ color: "#5e5e5e", fontSize: "20px" }} />
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};
export default InputTodo;
