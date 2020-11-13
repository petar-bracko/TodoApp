<template>
  <div class="todo-item">
    <p>
      {{ todo.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: "DeletedTodoItem",
  props: {
    todo: {
      type: Object,
      requierd: true,
    },
  },
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  border-radius: 50px;
  margin: 2px 0;
}
</style>
