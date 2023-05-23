import React from "react";
import Todo from "../Todo/Todo";

const Todos = ({ todos, setTodos, todo }) => {
  return (
    <div className="Todos">
      <ul>
        {todos.map((todo) => (
          <Todo
            text={todo.text}
            id={todo.id}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
