<template>
  <div id="app" class="bg-white dark:bg-gray-900">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background-color: #1a202c; */
}
</style>
