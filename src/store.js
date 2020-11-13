import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state() {
    return {
      todos: [],
      activeTodos: [],
      completedTodos: [],
      deletedTodos: [],
    };
  },
  getters: {
    GetTodos(state) {
      return state.todos;
    },
    GetCompletedTodos(state) {
      return state.completedTodos;
    },
    GetDeletedTodos(state) {
      return state.deletedTodos;
    },
    GetActiveTodos(state) {
      return state.activeTodos;
    },
  },
  mutations: {
    initTodos(state) {
      axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then((response) => (state.todos = response.data))
        .catch((err) => console.log(err));
    },
    initCompletedTodos(state) {
      axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then(
          (response) =>
            (state.completedTodos = response.data.filter(
              (todo) => todo.completed
            ))
        )
        .catch((err) => console.log(err));
    },
    initActiveAtodos(state) {
      axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then(
          (response) =>
            (state.activeTodos = response.data.filter(
              (todo) => !todo.completed
            ))
        )
        .catch((err) => console.log(err));
    },
    finishTodo(state, finishedTodo) {
      finishedTodo.completed = true;
      state.completedTodos.push(finishedTodo);
      state.activeTodos = state.activeTodos.filter(
        (todo) => todo.id !== finishedTodo.id
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
      state.activeTodos.push(itemToAdd);
    },
    deleteTodo(state, tododToDelete) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${tododToDelete}`)
        .then(() => state.deletedTodos.push(tododToDelete))
        .catch((err) => console.log(err));
      state.completedTodos = state.completedTodos.filter(
        (todo) => todo.id !== tododToDelete.id
      );
    },
    activateTodo(state, todoToActivate) {
      todoToActivate.completed = false;
      state.activeTodos.push(todoToActivate);
      state.completedTodos = state.completedTodos.filter(
        (todo) => todo.id !== todoToActivate.id
      );
    },
  },
});
