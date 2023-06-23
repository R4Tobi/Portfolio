<template>
<div class="socials">
  <h1>Socials</h1>
  <div class="cards" v-for="(social, index) in socials" :key="index">
    <div class="card" @click="(this.window.open(social.targetUrl))">
      <header>
        <img :src="social.iconUrl" class="icon"/>
        <h1>{{ social.header }}</h1>
      </header>
      <hr />
      <div class="content">
        {{ social.text }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Socials',
  data(){
    return{
      socials: [
        {
          iconUrl: "",
          header: "Instagram",
          text: "...",
          targetUrl: "about:blank"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../stylesheets/main.scss";
.socials{
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .cards{
    width: 80%;
    display: flex;

    .card{
      width: 300px;
      height: 300px;
      background: rgba(0,0,0,0.5);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid $ui-accent-blue;

      header{
        width: 90%;
        display:flex; 
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        img{
          width: 28px;
          height: 28px;
        }

        h1{
          font-size: 28px;
          margin-left: 10px;
          color: rgba(255,255,255,0.7)
        }
      }

      hr{
        width: 80%;
        border: none;
        outline: none;
        height: 2px;
        background: rgba(100,100,100,0.5);
      }

      .content{
        color: rgba(255,255,255,0.7);
        width: 80%;
      }
    }
  }
}
</style>
