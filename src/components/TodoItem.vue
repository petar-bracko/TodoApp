<template>
  <div class="todo-item clearfix">
    <p>
      <label>
        <input
          type="checkbox"
          @change="markcomplete"
          :checked="todo.completed === true"
        />
        <span>{{ todo.title }}</span>
      </label>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    markcomplete() {
      // if (this.todo.completed)
      //   this.$store.commit("cancelCompletedTodo", this.todo);
      // else this.$store.commit("finishTodo", this.todo);
      this.$store.commit("finishTodo", this.todo);
    },
  },
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
input[type="checkbox"] {
  margin-right: 10px;
}
</style>
