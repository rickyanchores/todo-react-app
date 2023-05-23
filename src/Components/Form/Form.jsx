import React from "react";

const Form = ({ input, setInput, todos, setTodos }) => {
  //EVENTS
  const inputChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault(e);
    console.log("Click");
    setTodos([...todos, { text: input, id: Math.random() * 1000 }]);
    setInput("");
  };

  return (
    <form action="">
      <input
        value={input}
        type="text"
        className="input"
        placeholder="type todo here"
        onChange={inputChange}
      />
      <button className="addTodo" onClick={addTodo}>
        +
      </button>
    </form>
  );
};

export default Form;
