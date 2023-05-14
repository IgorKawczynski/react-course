import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList";
import { TodosProvider } from "@/context/TodosContext";

import { useState } from "react";

const TodosLogic = () => {
  return (
    <div>
      <TodosProvider>
        <InputTodo />
        <TodosList />
      </TodosProvider>
    </div>
  );
};
export default TodosLogic;
