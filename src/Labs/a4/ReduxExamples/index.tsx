import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";


const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <HelloRedux/>
      <CounterRedux/>
      <AddRedux/>
      <TodoList/>
    </div>
  );
};

export default ReduxExamples;

