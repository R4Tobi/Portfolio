<template>
  <div class="header">
    <h1>GitHub Projekte</h1>
  </div>
  <div class="cards" @mousemove="handleMouseMove">
    <div
      class="card"
      v-for="(githubItem, index) in githubItems"
      :key="index"
      @click="openUrl(githubItem.url, '_blank')"
    >
      <div class="card-content">
        <h2>{{ githubItem.title }}</h2>
        <span>{{ githubItem.state }}</span>
        <p>{{ githubItem.description }}</p>
        <hr />
      </div>
    </div>
  </div>
  <div class="header reveal">
    <h1>Weitere Projekte</h1>
  </div>
  <div class="cards reveal" @mousemove="handleMouseMove">
    <div
      class="card"
      v-for="(otherItem, index) in otherItems"
      :key="index"
      @click="openUrl(otherItem.url, '_blank')"
    >
      <div class="card-content">
        <h2>{{ otherItem.title }}</h2>
        <span>{{ otherItem.state }}</span>
        <p>{{ otherItem.description }}</p>
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
      githubItems: [],
      otherItems: [],
      hoveredIndex: null,
      otherGithubRepos: [
        "https://api.github.com/repos/EinfachValle/Tierschutz-Eisenach",
        "https://api.github.com/repos/EinfachValle/NeatBeat"
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
    },
    async addCards() {
      const response = await fetch(
        "https://api.github.com/users/r4tobi/repos",
      );
      const jsonData = await response.json();
      for (let index = 0; index < jsonData.length; index++) {
        const tags = await fetch(
          `https://api.github.com/repos/r4tobi/${jsonData[index].name}/releases`,
        );
        const jsonTag = await tags.json();
        let tagName = "no releases created yet";
        if (jsonTag.length > 0) {
          tagName = `[${jsonTag[0].name}]`;
        }
        const newCard = {
          title: jsonData[index].name,
          description: jsonData[index].description,
          url: jsonData[index].html_url,
          state: tagName
        };
        this.githubItems.push(newCard);
      }
    },
    async addOtherCards(repoUrls) {
      for (let index = 0; index < repoUrls.length; index++) {
        let repoUrl = repoUrls[index]
        const response = await fetch(repoUrl, {
        });
        const jsonData = await response.json();
        const tags = await fetch(`${repoUrl}/releases`, {
        });
        const jsonTag = await tags.json();
        let tagName = "no releases created yet";
        if (jsonTag.length > 0) {
          tagName = `[${jsonTag[0].name}]`;
        }
        const newCard = {
          title: jsonData.name,
          description: jsonData.description,
          url: jsonData.html_url,
          state: tagName
        };
        this.otherItems.push(newCard);
      }
    }
  },
  mounted() {
    this.cards = document.querySelectorAll(".card");
    this.wrapper = document.querySelector(".cards");
    this.addCards();
    this.addOtherCards(this.otherGithubRepos);
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
@import "../stylesheets/projects.scss";
</style>
