import React from "react";

export const ToDosContext = React.createContext({
  todos: {},
  deleteTodo: () => {},
  changeTodo: () => {}
});
