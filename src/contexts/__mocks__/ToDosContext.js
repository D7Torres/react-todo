export const context = {
  todos: {
    "1": {
      id: "1",
      label: "My todo 1",
      isDone: true,
      urgency: 3,
      importance: 4
    },
    "2": {
      id: "2",
      label: "My todo 2",
      isDone: false,
      urgency: 0,
      importance: 1
    },
    "3": {
      id: "3",
      label: "My todo 3",
      isDone: false,
      urgency: 5,
      importance: 2
    }
  },
  deleteTodo: jest.fn(),
  changeTodo: jest.fn(),
  createTodo: jest.fn()
};

export const ToDosContext = {
  Consumer(props) {
    return props.children(context);
  }
};
