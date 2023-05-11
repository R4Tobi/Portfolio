<template>
<div class="main">
  <div class="bg">
  </div>
  <div class="title">
    To Be.<br />
    Web Solutions.
    <span>Design & Development</span>
  </div>
  <div class="content">
    <div class="left image"></div>
    <div class="right text">
      <p class="reveal">
        To Be. Web Solutions.<br/>
        Das ist nicht nur unser Name, sondern auch unser Motto.<br /> 
        Wer entwickeln will, dem muss der Code durch die Adern fließen.<br />
        Das verleiht dem Projekt Charakter und macht es einzigartig.<br />
        Du bist interessiert an einer Website? Dann fackel nicht lange und kontaktiere uns!
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
