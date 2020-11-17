<template>
  <Header />
  <router-view class="animate__animated animate__fadeIn" />
</template>

<script>
import Header from "./components/layout/Header.vue";

export default {
  name: "app",
  components: {
    Header,
  },
  created() {
    this.$store.dispatch("INIT_TODOS");
    this.$store.dispatch("INIT_COMPLETED_TODOS");
    this.$store.dispatch("INIT_ACTIVE_TODOS");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.hide-overflow {
  overflow: hidden;
}
</style>
