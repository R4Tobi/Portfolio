<template>
  <div class="information">
    <h1>Eigene Projekte</h1>
    <p>Als begeisterter/angehender Entwickler im Front- und Backendbereich habe ich natürlich einige Projekte offen oder erledigt.</p>
  </div>
  <div class="cards" @mousemove="handleMouseMove">
    <div
      class="card reveal"
      v-for="card in cards"
      :key="card.id"
      :style="{ '--xPos': card.xPos, '--yPos': card.yPos }"
      :data-card-id="card.id"
    >
      <div class="card-content">
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
      </div>
      <div class="card-gradient"></div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Projects",
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "NeatBeat",
          description: "NeatBeat ist ein Marktplatz für Produzenten, Musiker, Songwriter, Rapper, Videoproduzenten, usw."
        }
      ]
    };
  },
  methods: {
    handleMouseMove(event) {
      const cardId = Number(event.target.dataset.cardId);
      if (cardId) {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        this.cards.forEach((card) => {
          if (card.id === cardId) {
            card.xPos = `${x}px`;
            card.yPos = `${y}px`;
          } else {
            card.xPos = "-200px";
            card.yPos = "-200px";
          }
        });
      } else {
        this.cards.forEach((card) => {
          card.xPos = "-200px";
          card.yPos = "-200px";
        });
      }
    },
    async updateCardData() {
      try {
        const response = await fetch(
          "https://api.github.com/users/r4tobi/repos"
        );
        const jsonData = await response.json();
        for (let index = 0; index < jsonData.length; index++) {
          const newCard = {
            id: this.cards.length + 1,
            xPos: 0,
            yPos: 0,
            title: jsonData[index].name,
            description: jsonData[index].description
          };
          this.cards.push(newCard);
        }
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.updateCardData();
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
@import "../stylesheets/projects.scss";
</style>
