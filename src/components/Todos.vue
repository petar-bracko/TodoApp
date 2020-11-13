<template>
  <div>
    <div class="hide-overflow" v-if="Todos.length > 0">
      <transition-group
        leave-active-class="animate__animated animate__fadeOutRight check-todo-duration"
      >
        <div v-for="todo in Todos" :key="todo.id">
          <TodoItem :todo="todo" />
        </div>
      </transition-group>
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
.check-todo-duration {
  animation-duration: 0.3s;
}
</style>
