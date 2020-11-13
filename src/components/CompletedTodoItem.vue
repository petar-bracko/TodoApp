<template>
  <div class="todo-item">
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
      this.$store.commit("deleteTodo", this.todo);
    },
    activateTodo() {
      this.$store.commit("activateTodo", this.todo);
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
