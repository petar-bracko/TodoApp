<template>
  <div class="about">
    <h1>Completed Todos</h1>
    <div
      class="finished-todos"
      v-if="this.$store.state.completedTodos.length > 0"
    >
      <ul v-for="todo in this.$store.state.completedTodos" :key="todo.id">
        <li class="todo-item">{{ todo.title }}</li>
      </ul>
    </div>
    <div v-else class="finished-todos">
      <p>There are no finished Todos.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompletedTodos",
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.finished-todos {
  margin-top: 15px;
}
.finished-todos > ul {
  list-style-type: none;
}
.finished-todos > ul > li {
  padding: 15px 0;
}
</style>
