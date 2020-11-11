<template>
  <div>
    <form @submit="addTodo">
      <input
        type="text"
        name="title"
        v-model="title"
        placeholder="Add Todo..."
      />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      let newId;
      if (this.$store.state.todos.length === 0) {
        newId = 1;
      } else {
        newId =
          this.$store.state.todos[this.$store.state.todos.length - 1].id + 1;
      }
      let itemToAdd = {
        id: newId,
        title: this.title,
        completed: false,
      };
      axios
        .post("https://jsonplaceholder.typicode.com/todos", itemToAdd)
        .then(() => this.$store.state.todos.push(itemToAdd))
        .catch((err) => console.log(err));
      this.title = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  flex: 2;
}
</style>
