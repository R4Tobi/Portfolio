<template>
  <NavHeader />
</template>

<script>
import NavHeader from './components/NavHeader.vue'

export default {
  name: 'App',
  components: {
    NavHeader
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}

html, body{
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
