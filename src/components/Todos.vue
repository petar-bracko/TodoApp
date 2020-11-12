<template>
  <div>
    <div v-for="todo in Todos" :key="todo.id">
      <TodoItem :todo="todo" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "Todos",
  components: {
    TodoItem,
  },
  computed: {
    Todos() {
      return this.$store.getters.GetTodos;
    },
  },
};
</script>

<style scoped></style>
