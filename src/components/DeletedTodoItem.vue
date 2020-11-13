<template>
  <div>
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

<style scoped></style>
