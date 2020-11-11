<template>
  <div>
    <AddTodo v-on:add-todo="addTodo" />
    <Todos :todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Todos,
    AddTodo,
  },
  methods: {
    deleteTodo(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(
          () =>
            (this.$store.state.todos = this.$store.state.todos.filter(
              (todo) => todo.id !== id
            ))
        )
        .catch((err) => console.log(err));
    },
    addTodo(newTodoTitle) {
      let newId;
      if (this.$store.state.todos.length === 0) {
        newId = 1;
      } else {
        newId =
          this.$store.state.todos[this.$store.state.todos.length - 1].id + 1;
      }
      let itemToAdd = {
        id: newId,
        title: newTodoTitle,
        completed: false,
      };
      axios
        .post("https://jsonplaceholder.typicode.com/todos", itemToAdd)
        .then(() => this.$store.state.todos.push(itemToAdd))
        .catch((err) => console.log(err));
    },
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => (this.$store.state.todos = response.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
