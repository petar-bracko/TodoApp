<template>
  <div>
    <h1>Completed Todos</h1>
    <div class="finished-todos" v-if="CompletedTodos.length > 0">
      <div v-for="todo in CompletedTodos" :key="todo.id">
        <CompletedTodoItem :todo="todo" />
      </div>
    </div>
    <div v-else class="finished-todos">
      <p>There are no finished Todos.</p>
    </div>
  </div>
</template>

<script>
import CompletedTodoItem from "../components/CompletedTodoItem.vue";

export default {
  name: "CompletedTodos",
  components: {
    CompletedTodoItem,
  },
  computed: {
    CompletedTodos() {
      return this.$store.getters.GetCompletedTodos;
    },
  },
};
</script>

<style scoped>
.finished-todos {
  margin-top: 15px;
}
</style>
