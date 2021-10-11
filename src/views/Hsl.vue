<template>
  <div>
    <AppReturnButton />
    <img
      id="logo"
      @click="$router.push('/')"
      src="../assets/arcada_logo_v2.png"
    />
    <div class="main-container">
      <div>
        <table class="flex-container title">
          <p class="title destination">Destination</p>
          <p class="title line">Line</p>
          <p class="title time">Time</p>
          <p class="title type">Type</p>
          <p class="title destination">Destination</p>
          <p class="title line">Line</p>
          <p class="title time">Time</p>
          <p class="title type">Type</p>
        </table>
        <div class="timeTabel-container">
          <div v-for="post in posts" v-bind:key="post.$.line + post.$.time">
            <table class="flex-container">
              <p class="destination">{{ post.$.destination }}</p>
              <p class="line">{{ post.$.line }}</p>
              <p class="time">{{ formateTime(post.$.time) + ' min' }}</p>
              <p class="type">{{ post.$.type }}</p>
            </table>
          </div>
        </div>
        <table class="flex-container bottom">
          <p class="title slogan">
            <i>"Parhaat matkat tehdään yhdessä" </i> -HSL
          </p>
        </table>
      </div>
    </div>
    <footer><i>Arcada Navigator v1.0.1</i></footer>
  </div>
</template>

<script>
import axios from 'axios'; // Tar in axios för API requests
import { parseString } from 'xml2js'; // parsar XML data till json
import AppReturnButton from '../components/AppReturnButton.vue'; 

export default {
  name: 'home',
  metaInfo: {
      title: 'HSL'
    },
  components: {
    AppReturnButton,
  },
  data: () => ({
    posts: [],
    polling: null, // pollingen för datan
  }),
  // on create då "appen/komponenten" öppnas
  created() {
    this.fetch();
    this.pollData();
  },
  // När du stänger ner fliken/komponenten/appen så nollas pollingen så den inte körs i bakgrunden för evigft (one page application = ajaj för presntandan)
  beforeDestroy() {
    clearInterval(this.polling);
  },
  methods: {
    fetch() {
      axios
        .get('https://famnen.arcada.fi/arbs/infotv/hst.php') // API url
        .then((response) => {
          var xmlData = response.data; // läser in från APIN till XML data
          parseString(xmlData, (err, results) => {
            this.posts = results.hst.departure; // parsar datan till JSON format
          });
        });
    },
    // funktion för formatering av arrival/departure time
    formateTime(time) {
      var currentTime = new Date();
      var arrivalTime = new Date(time);
      var remainingTime = arrivalTime - currentTime;
      var remainingMinutes = Math.round(remainingTime / 60000);

      return remainingMinutes;
    },
    // Poll för att updatera informationen till nära realtid
    pollData() {
      this.polling = setInterval(() => {
        this.fetch();
      }, 1000);
    },
  },
};
</script>
<style scoped>

#logo {
  height: 200px;
}

.main-container {
  display: flex;
  justify-content: center;
}

.timeTabel-container {
  max-width: 1200px;
  overflow: hidden;
  display: flex;
  max-height: 500px;
  flex-wrap: wrap;
  flex-direction: column;
  font-size: 1.5rem;
  color: #555;
}

.title.destination {
  max-width: 22.5%;
}

.title.line {
  max-width: 10%;
}

.title.time {
  max-width: 10%;
}

.title.type {
  max-width: 8.5%;
}

.flex-container.title {
  width: 1200px;
  background-color: #812990;
  color: rgb(228, 228, 228);
  font-size: 1.6rem;
  justify-content: start;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 5px;
}

.flex-container.bottom {
  width: 1200px;
  background-color: #812990;
  color: rgb(228, 228, 228);
  font-size: 1.6rem;
  justify-content: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 5px;
}

.flex-container {
  justify-content: space-between;
  width: 600px;
  height: 50px;
  margin: 0px;
  display: flex;
  border: solid 1px;
  background-color: #a43cb7;
  color: rgb(228, 228, 228);
  padding: 5px;
  transition: 1s;
}

p {
  text-align: left;
  padding: 0px;
  margin: auto 0;
  display: block;
  transition: 1s;
}
.destination {
  padding-left: 4px;
  width: 40%;
}
.line {
  width: 10%;
}
.time {
  width: 15%;
}
.type {
  width: 15%;
  text-transform: capitalize;
}
.slogan {
  text-align: center;
}
footer {
  position: fixed;
  bottom: 0;
  color: rgb(101, 101, 101);
  width: 100%;
  margin-bottom: 10px;
}

@media screen and (max-height: 850px) {
  footer {
    display: none;
  }
  #logo {
    height: 150px;
  }
}
</style>
