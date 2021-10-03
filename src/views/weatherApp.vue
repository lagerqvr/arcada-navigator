<template>
  <div class="weather-container">
    <div class="current-weather">
      <p>hej</p>
    </div>
    <!-- end current weather -->
  </div>
  <!-- weather container end -->
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      weather: {
        cityName: "Helsinki",
        country: "Finland",
        temperature: "",
        humidity: "",
        lowTemp: "",
        highTemp: "",
      },
    };
  },
  created() {
    this.getWeather();
  },

  methods: {
    getWeather: async function () {
      const apiKey = "a4061165de10b2d44ee5832fd238a336";
      const baseURL = `api.openweathermap.org/data/2.5/weather?q=helsinki&appid=${apiKey}&units=metric`;
      const response = await fetch(baseURL);
      const data = await response.json();
      console.log(data);
    },
  },
};
</script>
<style>
</style>