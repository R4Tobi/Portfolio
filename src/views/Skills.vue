<template>
  <div class="header">
    <h1>Skills</h1>
  </div>
  <div class="centered">
    <div class="cards" @mousemove="handleMouseMove">
      <div
        class="card"
        :class="skill.color"
        v-for="(skill, index) in skills"
        :key="index"
      >
        <div class="card-content">
          <div class="card-header">
            <h2>{{ skill.title }}</h2>
            <img class="icon" :src="skill.iconUrl" />
          </div>
          <hr />
          <p>{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Skills",
  data() {
    return {
      skills: [
        {
          title: "HTML 5",
          description:
            "HTML5 ist die aktuelle Version der Markup-Sprache für Webseiten. Es ermöglicht die Integration von Multimedia-Inhalten, bietet neue semantische Elemente zur besseren Strukturierung des Inhalts und unterstützt interaktive Funktionen. HTML5 ist plattformunabhängig und von modernen Browsern unterstützt, um leistungsstarke Websites zu entwickeln.",
          color: "orange",
          iconUrl: "/icons/html5-logo-vector.svg"
        },
        {
          title: "CSS & SCSS",
          description:
            "CSS (Cascading Style Sheets) ist eine Stylesheet-Sprache, die verwendet wird, um das Aussehen und die Formatierung von Webseiten zu definieren. Es ermöglicht die Gestaltung von Farben, Layouts, Schriften und Animationen. SCSS (Sassy CSS) ist eine erweiterte Syntax von CSS, die Variablen, Verschachtelungen und andere Funktionen bietet, um die Entwicklereffizienz zu steigern und den Code besser zu organisieren.",
          color: "blue",
          iconUrl: "/icons/css3-logo-vector.svg"
        },
        {
          title: "Javascript ES6",
          description:
            "JavaScript ES6 (ECMAScript 2015) ist eine moderne Version der JavaScript-Sprache. Es bietet viele neue Funktionen und Syntaxverbesserungen, wie Pfeilfunktionen, Klassen, Modulimporte und -exporte, Template-Strings und Array- und Objektdestrukturierung. ES6 verbessert die Lesbarkeit und Wartbarkeit von JavaScript-Code und fördert eine effizientere Entwicklung.",
          color: "yellow",
          iconUrl: "/icons/javascript-logo-vector.svg"
        },
        {
          title: "node.js & express.js",
          description:
            "Node.js ist eine serverseitige Laufzeitumgebung, die auf der JavaScript-Sprache basiert. Sie ermöglicht die Ausführung von JavaScript-Code außerhalb des Browsers und bietet eine effiziente und skalierbare Plattform für die Entwicklung von serverseitigen Anwendungen. Express.js ist ein beliebtes Node.js-Framework, das die Entwicklung von Webanwendungen durch einfache Routenhandhabung und Middleware-Unterstützung erleichtert.",
          color: "green",
          iconUrl: "/icons/nodejs-icon-logo-vector.svg"
        },
        {
          title: "vue.js",
          description:
            "Vue.js ist ein progressives JavaScript-Framework für die Entwicklung von benutzerfreundlichen Webanwendungen. Es ermöglicht die einfache Erstellung interaktiver Benutzeroberflächen mit einer komponentenbasierten Architektur. Vue.js bietet eine reaktive Datenbindung, eine einfache Syntax und eine breite Palette von Erweiterungen, was es zu einer beliebten Wahl für Frontend-Entwicklung macht.",
          color: "green",
          iconUrl: "/icons/vue-logo-vector.svg"
        },
        {
          title: "Raspberry Pi",
          description:
            "Der Raspberry Pi ist ein Einplatinencomputer, der als vielseitige Plattform für Projekte und Lernzwecke dient. Er läuft auf einem Linux-basierten Betriebssystem und hat viele Anwendungsmöglichkeiten. Python ist eine benutzerfreundliche Programmiersprache, die häufig auf dem Raspberry Pi verwendet wird, um Projekte zu entwickeln, da sie eine breite Palette von Bibliotheken bietet. Zusammen ermöglichen Raspberry Pi und Python den Einstieg in die Hardwareprogrammierung und das Internet der Dinge (IoT).",
          color: "red",
          iconUrl: "/icons/raspberry-pi-logo-vector.svg"
        }
      ]
    };
  },
  methods: {
    handleMouseMove(event) {
      this.cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty("--xPos", `${x}px`);
        card.style.setProperty("--yPos", `${y}px`);
      });
    },
    openUrl(url, target) {
      window.open(url, target);
    }
  },
  mounted() {
    this.cards = document.querySelectorAll(".card");
    this.wrapper = document.querySelector(".cards");
  },
  updated() {
    this.cards = document.querySelectorAll(".card");
  }
};

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
@import "../stylesheets/skills.scss";
</style>
