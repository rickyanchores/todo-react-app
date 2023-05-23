import { useState } from "react";
import Form from "./Components/Form/Form";
import Todos from "./Components/Todos/Todos";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>React: Todo app v2</h1>
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <Todos todos={todos} setTodos={setTodos} />
      <p>developed by Ricky A</p>
    </div>
  );
}
