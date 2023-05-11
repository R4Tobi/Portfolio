<template>
<div class="main">
  <div class="bg">
  </div>
  <div class="title">
    To Be.<br />
    Web Solutions.
    <span>Design & Development</span>
  </div>
  <div class="content-1">
    <div class="left image"></div>
    <div class="right text">
      <h2 class="reveal">To Be.<br /> Web Solutions.</h2>
      <p class="reveal">
        Das ist nicht nur unser Name, sondern auch unser Motto.<br /> 
        Wer entwickeln will, dem muss der Code durch die Adern fließen.<br />
        Das verleiht deinem Projekt Charakter und macht es einzigartig.<br />
        Wir helfen dir das passende Design zu finden oder bereits bestehende Designs umzusetzen.<br /><br />
        Dazu geben wir ne Menge Ideen in ein Topf, filtern das beste raus und benutzen dann Vue.js um deine Website zu bauen.<br />
        Du bist interessiert an einer Website? Dann fackel nicht lange und kontaktiere uns!<br />
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'NavHeader',
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

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
@import "../stylesheets/main.scss";
@import "../stylesheets/about.scss";
</style>
