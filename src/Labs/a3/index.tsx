import Add from "./Add";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import ConditionalOutputIfElse from "./ConditionalOutput/ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutput/ConditionalOutputInline";
import Highlight from "./Highlight";
import JavaScript from "./JavaScript";
import Styles from "./Styles";
import { useSelector } from "react-redux";
import { LabState } from "../store";
import PathParameters from "./routing/PathParameters";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";

function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);

    return (
      <div className="container">
        <h1>Assignment 3</h1>
      
        <JavaScript/>
        <PathParameters/>
        <Classes/>
        <Styles/>
        <ConditionalOutput/>
        <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
     <Add a={3} b={4} />
     <TodoItem/>
     <TodoList/>
      </div>
    );
  }
  export default Assignment3;
  
  