<script>

  export default {
    mounted() {
    }

  };
</script>

<template>
  <div id="app">
    <section class="hero is-hero">
      <p class="level-item has-text-centered">
        <img src="images/logo.png" alt="Logo" style="height: 50px;">
      </p>
    </section>
    <section class="container">
      <br>
      <br>
      <router-view></router-view>
    </section>
    
  </div>
</template>

<style lang="sass">
  @import "node_modules/bulma/sass/utilities/_all";

</style>
