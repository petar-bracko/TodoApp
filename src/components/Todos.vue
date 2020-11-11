<template>
  <div>
    <div v-for="todo in this.$store.state.todos" :key="todo.id">
      <TodoItem :todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
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
};
</script>

<style scoped></style>
