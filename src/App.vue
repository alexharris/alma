<template>
  <div id="app">
    <div class="container">
      <div class="row">    
        <Header />

        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "maps",
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
  #app {
    margin-top: 5rem;
  }
</style>

