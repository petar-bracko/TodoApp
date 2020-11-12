<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/layout/Header.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    Header,
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => (this.$store.state.todos = response.data))
      .catch((err) => console.log(err));
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(
        (response) =>
          (this.$store.state.completedTodos = response.data.filter(
            (todo) => todo.completed
          ))
      );
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
