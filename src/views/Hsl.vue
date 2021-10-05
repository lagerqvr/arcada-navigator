<template>
  <div>
    <AppReturnButton />
    <div class="timeTabel-container">
      <div v-for="post in posts" v-bind:key="post.$.line + post.$.time">
        <table class="flex-container">
          <p class="destination">{{ post.$.destination }}</p>
          <p class="line">{{ post.$.line }}</p>
          <p class="time">{{ formateTime(post.$.time) }}</p>
          <p class="type">{{ post.$.type }}</p>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { parseString } from 'xml2js';
import AppReturnButton from '../components/AppReturnButton.vue';

export default {
  name: 'home',
  components: {
    AppReturnButton,
  },
  data: () => ({
    posts: [],
    polling: null,
  }),
  created() {
    this.fetch();
    this.pollData();
  },
  beforeDestroy() {
    clearInterval(this.polling);
  },
  methods: {
    fetch() {
      axios
        .get('https://famnen.arcada.fi/arbs/infotv/hst.php')
        .then((response) => {
          var xmlData = response.data;
          parseString(xmlData, (err, results) => {
            this.posts = results.hst.departure;
<<<<<<< HEAD
=======
            console.log('hello polling');
>>>>>>> cc0ad9256c410627e65d7959da5b89aa0df5c9c7
          });
        });
    },
    formateTime(time) {
      var currentTime = new Date();
      var arrivalTime = new Date(time);
      var remainingTime = arrivalTime - currentTime;
      var remainingMinutes = Math.round(remainingTime / 60000);

      return remainingMinutes;
    },

    pollData() {
      this.polling = setInterval(() => {
        this.fetch();
      }, 1000);
    },
  },
};
</script>
<style scoped>
.timeTabel-container {
  max-width: 600px;
  overflow: hidden;
  display: flex;
  max-height: 250px;
  flex-wrap: wrap;
  flex-direction: column;
}

.flex-container {
  justify-content: space-between;
  width: 300px;
  height: 25px;
  margin: 0px;
  display: flex;
  border: solid 2px;
  background-color: lightblue;
}
p {
  text-align: left;
  padding: 0px;
  margin: auto 0;
  display: block;
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
}
</style>
