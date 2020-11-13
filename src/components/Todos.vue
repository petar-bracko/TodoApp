<template>
  <div>
    <div v-if="Todos.length > 0">
      <div v-for="todo in Todos" :key="todo.id">
        <TodoItem :todo="todo" />
      </div>
    </div>
    <div v-else>
      <div class="empty-active-todos-list">
        <p>
          Thera are no active Todos. You can add new ones, or activate old ones.
        </p>
      </div>
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
      return this.$store.getters.GetActiveTodos;
    },
  },
};
</script>

<style scoped>
.empty-active-todos-list {
  margin-top: 5px;
}
</style>
