<template>
  <div class="nav">
    <div class="left">To Be. Web Solutions.</div>
    <div class="right">
      <ul>
        <li>Über mich</li>        
        <li>Projekte</li>        
        <li>Socials</li>        
        <li>Skills</li>        
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavHeader',
  props: {
    urls: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../stylesheets/nav.scss";
</style>
