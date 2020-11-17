<template>
  <div>
    <p>
      <span>{{ todo.title }}</span>
      <button class="del" @click="deleteTodo">
        Delete
      </button>
      <button class="activate" @click="activateTodo">
        Activate
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: "CompletedTodoItem",
  props: {
    todo: {
      type: Object,
      requierd: true,
    },
  },
  methods: {
    deleteTodo() {
      this.$store.dispatch("DELETE_TODO", this.todo);
    },
    activateTodo() {
      this.$store.dispatch("ACTIVATE_TODO", this.todo);
    },
  },
};
</script>

<style scoped>
.todo-item span {
  text-decoration: line-through;
  opacity: 0.5;
}
.del {
  background: red;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
  margin-left: 5px;
}
.activate {
  background: greenyellow;
  color: #000;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
  margin-right: 5px;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>
