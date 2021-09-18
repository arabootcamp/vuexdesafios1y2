<template>
  <div id="app">
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .vista-enter-active {
    transition: opacity 2s;
  }

  .vista-enter{
    opacity: 0;
  }
</style>