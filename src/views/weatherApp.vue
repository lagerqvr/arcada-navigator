<template>
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
  
</template>

<script>
import axios from "axios";

export default {
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
          console.log(response.data.main);
        });
    },
  },
};
</script>
<style>
.weather-container{
background-color: lightblue;
}

.current-weather{
  display: inline-block;
  background-color: grey;
  width: 350px;
  height: 400px;
}
</style>