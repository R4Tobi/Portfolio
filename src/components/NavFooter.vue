<template>
  <footer class="reveal">
    <hr class="first" />
    <div class="urls">
      <div class="container image">
        <img src="../assets/logo-light.png" />
      </div>
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
      <div class="container">
        <h3>Externe Links</h3>
        <ul>
          <li>
            <a href="https://www.instagram.com/tobx218/">Instagram / tobx218</a>
          </li>
          <li><a href="https://www.github.com/R4Tobi/">Github / R4Tobi</a></li>
          <li>
            <a href="https://open.spotify.com/user/itobilp_dererste
">Spotify</a>
          </li>
        </ul>
      </div>
    </div>
    <hr class="second" />
    <p>&#169; Copyright 2023, "To Be. Web Solutions"</p>
  </footer>
</template>

<script>
export default {
  name: "NavFooter"
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../stylesheets/nav.scss";
</style>
