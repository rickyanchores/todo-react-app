import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  //Event

  const removeTodo = () => {
    console.log("remove");
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="Todo">
      <li className="todo-item">
        <h3>Todo {text}</h3>
        <button className="remove-btn" onClick={removeTodo}>
          Remove
        </button>
      </li>
    </div>
  );
};

export default Todo;
