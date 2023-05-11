<template>
  <div class="nav">
    <div class="left">To Be. <span>Web Solutions.</span></div>
    <div class="right">
      <ul>
        <li><router-link to="/home">Über Mich</router-link></li>
        <li><router-link to="/projects">Projekte</router-link></li>
        <li><router-link to="/skills">Skills</router-link></li>
        <li><router-link to="/socials">Socials</router-link></li>
        <li><router-link to="/contact">Kontakt</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavHeader',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../stylesheets/nav.scss";
</style>
