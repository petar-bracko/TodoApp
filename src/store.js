import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      todos: [],
      completedTodos: [],
    };
  },
});
