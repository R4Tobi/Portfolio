<template>
  <div class="header">
    <h1>Meine Projekte</h1>
  </div>
  <div class="cards" @mousemove="handleMouseMove" ref="cardsContainer">
    <div class="card" v-for="(item, index) in items" :key="index">
      <div class="card-content">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Projects",
  data() {
    return {
      items: [
      ],
      hoveredIndex: null,
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
    async addCards() {

      const response = await fetch("https://api.github.com/users/r4tobi/repos");
        const jsonData = await response.json();
        for(let index = 0; index < jsonData.length; index++){
          const newCard = {title: jsonData[index].name, description: jsonData[index].description };
          this.items.push(newCard);
        }
    },
    
  },
  mounted() {
    this.cards = document.querySelectorAll(".card");
    this.wrapper = document.querySelector(".cards");
    this.addCards();
  },
  updated() {
    this.cards = document.querySelectorAll(".card");
  },
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
