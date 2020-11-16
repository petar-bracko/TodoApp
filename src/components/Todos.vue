<template>
  <div>
    <div class="hide-overflow">
      <div
        v-show="Todos.length == 0"
        class="empty-active-todos-list animate__animated animate__fadeInDown anim-duration3"
      >
        <p>
          Thera are no active Todos. You can add new ones, or activate old ones.
        </p>
      </div>
      <transition-group
        leave-active-class="animate__animated animate__fadeOutRight check-todo-duration"
        enter-active-class="animate__animated animate__fadeInLeft check-todo-duration"
      >
        <div v-for="todo in Todos" :key="todo.id">
          <TodoItem :todo="todo" />
        </div>
      </transition-group>
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
