<template>
  <!-- <div>
  <AppReturnButton/>
  <div class="weather-container">
      <div class="current-weather">
        <p class="cityName">City: Helsinki</p>
        <p class="country">Country: Finland</p>
        <p class="temperature">Temperature: {{ info.temp }}°C</p>
        <p class="humidity">Humidity: {{ info.humidity }}%</p>
        <p class="lowTemp">Lowest temperature: {{ info.temp_min }}°C</p>
        <p class="highTemp">Highest temperature: {{ info.temp_max }}°C</p>
      </div>
  </div>
</div> -->

  <div class="weather-app">
    <AppReturnButton />
    <div class="main-app">
      <div class="top-side">
        <div class="cloudiness">
          <img src="../assets/animated/day.svg" /> <span>90%</span>
        </div>
        <div class="wind-speed">
          <img
            class="wind-picture"
            src="../assets/animated/wind.svg"
            width="45px"
          />
          <span>1.34 m/s</span>
        </div>
        <div class="humidity">
          <img
            class="humidity-drop"
            src="../assets/animated/humidity.svg"
            width="45px"
          />
          <span>80%</span>
        </div>
      </div>
      <div class="middle-side">
        <div class="temperature-container"></div>
        <div class="temperature">10</div>
      </div>
      <div class="bottom-side"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AppReturnButton from "../components/AppReturnButton.vue";

export default {
  components: {
    AppReturnButton,
  },

  data: () => ({
    info: [],
  }),
  created() {
    this.getWeather();
  },

  methods: {
    getWeather() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=helsinki&appid=a4061165de10b2d44ee5832fd238a336&units=metric`
        )
        .then((response) => {
          this.info = response.data.main;
          console.log("hej");
          console.log(response.data);
        });
    },
  },
};
</script>
<style>
.weather-app {
  height: 100vh;
  width: 100vw;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  align-items: center;
}
.main-app {
  background-color: lightblue;
  width: 330px;
  height: 600px;
  border-radius: 5px;
  display: flex;
  background-position: 50%;
  background-size: cover;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
}
.top-side {
  width: 100%;
  padding-top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.wind-picture {
  margin: 7.5px;
}
.humidity-drop {
  margin: 7.5px;
}
.middle-side {
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-pack: center;
  justify-content: center;
}
.temperature-container {
  display: block;
}
/* .weather-container {
  background-color: lightblue;
}

.current-weather {
  display: inline-block;
  background-color: grey;
  width: 350px;
  height: 400px;
} */
</style>