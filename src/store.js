import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state() {
    return {
      todos: [],
      completedTodos: [],
    };
  },
  getters: {
    GetTodos(state) {
      return state.todos;
    },
    GetCompletedTodos(state) {
      return state.completedTodos;
    },
  },
  mutations: {
    initTodos(state) {
      axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then((response) => (state.todos = response.data))
        .catch((err) => console.log(err));
    },
    initCompletedTodos(state) {
      axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then(
          (response) =>
            (state.completedTodos = response.data.filter(
              (todo) => todo.completed
            ))
        )
        .catch((err) => console.log(err));
    },
    addCompletedTodo(state, todo) {
      todo.completed = true;
      state.completedTodos.push(todo);
    },
    cancelCompletedTodo(state, canceled) {
      canceled.completed = false;
      state.completedTodos = state.completedTodos.filter(
        (todo) => todo.id !== canceled.id
      );
    },
    addNewTodo(state, newTodoTitle) {
      let newId;
      if (state.todos.length === 0) {
        newId = 1;
      } else {
        newId = state.todos[state.todos.length - 1].id + 1;
      }
      let itemToAdd = {
        id: newId,
        title: newTodoTitle,
        completed: false,
      };
      axios
        .post("https://jsonplaceholder.typicode.com/todos", itemToAdd)
        .then(() => state.todos.push(itemToAdd))
        .catch((err) => console.log(err));
    },
    finishTodo(state, todoToFinish) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${todoToFinish.id}`)
        .then(
          () =>
            (state.todos = state.todos.filter(
              (todo) => todo.id !== todoToFinish.id
            ))
        )
        .catch((err) => console.log(err));
    },
  },
});
