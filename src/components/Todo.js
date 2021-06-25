import React from "react";

const Todo = (props) => {
  return (
    <div>
      <h3 data-cy="todoItem">{props.todo.title}</h3>
    </div>
  );
};

export default Todo;
