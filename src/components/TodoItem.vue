<template>
  <div class="todo-item clearfix" :class="{ 'is-complete': todo.completed }">
    <p>
      <input
        type="checkbox"
        @change="markcomplete(todo)"
        :checked="todo.completed === true"
      />
      <span>{{ todo.title }}</span>
      <button class="del" @click="deleteTodo">
        X
      </button>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    markcomplete(todo) {
      if (todo.completed) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    },
    deleteTodo() {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${this.todo.id}`)
        .then(
          () =>
            (this.$store.state.todos = this.$store.state.todos.filter(
              (todo) => todo.id !== this.todo.id
            ))
        )
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.is-complete {
  text-decoration: line-through;
}
.is-complete span {
  opacity: 0.5;
}
input[type="checkbox"] {
  margin-right: 10px;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>
