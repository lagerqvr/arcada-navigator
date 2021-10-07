<template>
  <div class="weather-app">
    <AppReturnButton />
    <div class="main-app">
      <div class="top-side">
        <div class="cloudiness">
          <img src="../assets/animated/cloudy.svg" />
          <span>{{ info.clouds.all }}%</span>
        </div>
        <div class="wind-speed">
          <img
            class="wind-picture"
            src="../assets/animated/wind.svg"
            width="45px"
          />
          <span>{{ info.wind.speed }} m/s</span>
        </div>
        <div class="humidity">
          <img
            class="humidity-drop"
            src="../assets/animated/humidity.svg"
            width="45px"
          />
          <span>{{ info.main.humidity }}%</span>
        </div>
      </div>
      <div class="middle-side">
        <div class="temperature-container">
          {{ info.main.temp | truncate(2, "") }}
        </div>
        <div class="temperature-right">
          <div class="temperature-scale">°C</div>
          <div class="temperature-high">
            <img src="../assets/animated/up-arrow.svg" />
            <span>{{ info.main.temp_max }}°C</span>
          </div>
          <div class="temperature-low">
            <img src="../assets/animated/down-arrow.svg" />
            <span>{{ info.main.temp_min }}°C</span>
          </div>
        </div>
      </div>
      <div class="bottom-side">
        <div class="location">Helsinki, Fi</div>
        <div class="weather-description">cloudy</div>
        <img id="weather-condition" src="../assets/animated/rainy-1.svg" width="300px" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AppReturnButton from "../components/AppReturnButton.vue";
import $ from "jquery";
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
  filters: {
    truncate: function (text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      } else {
        return text;
      }
    },
  },
  methods: {
    getWeather() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=helsinki&appid=a4061165de10b2d44ee5832fd238a336&units=metric`
        )
        .then((response) => {
          this.info = response.data;

          if (response.data.weather[0].main == "Thunderstorm") {
            $("weather-condition").attr(
              "src",
              "../assets/animated/thunder.svg"
            );
          }
          if (response.data.weather[0].main == "Rain") {
            $("weather-condition").attr(
              "src",
              "../assets/animated/rainy-1.svg"
            );
          }
          if (response.data.weather[0].main == "Snow") {
            $("weather-condition").attr(
              "src",
              "../assets/animated/snowy-1.svg"
            );
          }
          if (response.data.weather[0].main == "Clear") {
            $("weather-condition").attr("src", "../assets/animated/day.svg");
          }
          if (response.data.weather[0].main == "Clouds") {
            console.log("if funkar");
            $("#weather-condition").attr(
              "src",
              "../assets/animated/cloudy-day-1.svg"
            );
          }
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
  background-color: rgb(124, 179, 231);
}
.main-app {
  background-color: lightblue;
  box-shadow: 0 19px 38px rgb(0 0 0 / 30%), 0 15px 12px rgb(0 0 0 / 22%);
  width: 330px;
  height: 600px;
  border-radius: 5px;
  display: flex;
  background-position: 50%;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  background-image: url("../assets/animated/weather-background.jpg");
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
  font-size: 7em;
}

.temperature-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
}
.temperature-scale {
  padding-top: 0px;
  font-size: 2em;
}
.temperature-high {
  width: 30px;
}
.temperature-low {
  width: 30px;
}
</style>