<template>
  <div>
    <h1>Completed Todos</h1>
    <hr />
    <div class="flex-group">
      <div class="flex-50-cont">
        <h2>Finished Todos</h2>
        <div class="finished-todos" v-if="CompletedTodos.length > 0">
          <div v-for="todo in CompletedTodos" :key="todo.id">
            <CompletedTodoItem :todo="todo" />
          </div>
        </div>
        <div v-else class="finished-todos">
          <p>There are no finished Todos.</p>
        </div>
      </div>
      <div class="flex-50-cont">
        <h2>Deleted Todos</h2>
        <div class="finished-todos" v-if="DeletedTodos.length > 0">
          <div v-for="todo in DeletedTodos" :key="todo.id">
            <DeletedTodoItem :todo="todo" />
          </div>
        </div>
        <div v-else class="finished-todos">
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
.finished-todos {
  padding-top: 15px;
}
.flex-group {
  display: flex;
  flex-direction: row;
  padding: 60px 30px;
}
.flex-50-cont {
  width: 50%;
  border: 1px solid red;
  margin: 0 15px;
}
</style>
