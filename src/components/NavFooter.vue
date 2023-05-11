<template>
  <footer>
    <div class="container">
      <h3>Seitenlinks</h3>
      <ul>
        <li><router-link to="/home">Über Mich</router-link></li>
        <li><router-link to="/projects">Projekte</router-link></li>
        <li><router-link to="/skills">Skills</router-link></li>
        <li><router-link to="/socials">Socials</router-link></li>
        <li><router-link to="/contact">Kontakt</router-link></li>
      </ul>
    </div>
    <div class="container">
      <h3>Datenschutz und Co.</h3>
      <ul>
        <li><router-link to="/impressum">Impressum</router-link></li>
        <li><router-link to="/privacy">Datenschutz</router-link></li>
        <li><router-link to="/agb">AGB</router-link></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'NavFooter',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../stylesheets/nav.scss";
</style>
