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
        Das ist nicht nur mein Name, sondern auch mein Motto.<br /> 
        Wer entwickeln will, dem muss der Code durch die Adern fließen.<br />
        Das verleiht dem Projekt Charakter und macht es einzigartig.<br />
        Ich helfen dir das passende Design zu finden, oder bereits bestehende Designs umzusetzen.<br /><br />
        Dazu sammeln wir Ideen, suchen das beste raus und benutzen dann die Magie des Webdevelopments um deine Website zu verwirklichen.<br />
        Du bist interessiert an einer Website? Dann fackel nicht lange und kontaktiere mich!<br />
      </p>
    </div>
  </div>
  <div class="content-2">
    <div class="left text">
      <h2 class="reveal">Über mich</h2>
      <p class="reveal">Hi ich bin Tobi und programmiere seit ca. 5 Jahren. Keine große Zahl, außer wenn man bedenkt das ich mit 13 angefangen habe.<br />
        Ich hab angefangen einfache Websiten mit HTML zu bauen und immer schneller kamen neue Sprachen, wie CSS oder Javascript, dazu.<br />
        Mittlerweile bin ich 18 Jahre alt, und habe einige Fähigkeiten im Bereich Frontend (das was man sieht) und dem Backend (das was auf dem Server passiert, damit alles funktioniert) sammeln können.<br />
        Darüber hinaus hab ich bereits Entwicklungen in Zusammenehang mit dem Raspberry Pi gemacht.<br />
        Dazu zählen. u.a. einen Node.js Server, Apache Server, DNS-Server(Pi-Hole), PiVPN und ähnliches.<br />
        Mehr dazu findet ihr bei meinen Skills.
      </p>
    </div>
    <div class="right image">
      <div class="background"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'About',
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
