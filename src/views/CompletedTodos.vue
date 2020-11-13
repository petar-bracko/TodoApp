<template>
  <div>
    <h1>Completed Todos</h1>
    <hr />
    <div class="flex-group">
      <div class="flex-50-cont">
        <h2>Finished Todos</h2>
        <div class="pt15" v-if="CompletedTodos.length > 0">
          <transition-group
            leave-active-class="animate__animated animate__fadeOutLeft anim-duartion3"
          >
            <div
              class="todo-item"
              v-for="todo in CompletedTodos"
              :key="todo.id"
            >
              <CompletedTodoItem :todo="todo" />
            </div>
          </transition-group>
        </div>
        <div v-else class="pt15">
          <p>There are no finished Todos.</p>
        </div>
      </div>
      <div class="flex-50-cont">
        <h2>Deleted Todos</h2>
        <div class="hide-overflow pt15" v-if="DeletedTodos.length > 0">
          <transition-group
            enter-active-class="animate__animated animate__fadeInRight anim-duartion3"
          >
            <div class="todo-item" v-for="todo in DeletedTodos" :key="todo.id">
              <DeletedTodoItem :todo="todo" />
            </div>
          </transition-group>
        </div>
        <div v-else class="pt15">
          <p>There are no deleted Todos.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CompletedTodoItem from "../components/CompletedTodoItem.vue";
import DeletedTodoItem from "../components/DeletedTodoItem";

export default {
  name: "CompletedTodos",
  components: {
    CompletedTodoItem,
    DeletedTodoItem,
  },
  computed: {
    CompletedTodos() {
      return this.$store.getters.GetCompletedTodos;
    },
    DeletedTodos() {
      return this.$store.getters.GetDeletedTodos;
    },
  },
};
</script>

<style scoped>
.pt15 {
  padding-top: 15px;
}
.flex-group {
  display: flex;
  flex-direction: row;
  padding: 60px 30px;
}
.flex-50-cont {
  width: 50%;
  margin: 0 15px;
}
.todo-item {
  margin: 2px 0;
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  border-radius: 50px;
}
.anim-duartion3 {
  animation-duration: 0.5s;
}
</style>
