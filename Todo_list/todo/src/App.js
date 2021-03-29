import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [todos, settodos] = useState([
    "Take dog's for a walk",
    "I am joker",
    "love you alot",
  ]);
  const [input, setinput] = useState("");
  const addTodo = (event) => {
    console.log(`working ${event}`);
    event.preventDefault();
    setinput("");
    settodos([...todos, input]);
  };
  console.log(input);
  return (
    <div className="App">
      <h1>BTM todo</h1>
      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setinput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add ToDo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
