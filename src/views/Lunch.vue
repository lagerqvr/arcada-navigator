<template>
  <div>
    <AppReturnButton />
    <img
      id="logo"
      @click="$router.push('/')"
      src="../assets/arcada_logo_v2.png"
      height="200px"
    />
    <div>
      <div class="center-div">
        <h2>Lunch</h2>
        <h3>Monday</h3>
        <div v-for="day in days[0].SetMenus" :key="day.Date">
          <div v-for="component in day.Components" :key="component">
            {{ component }}
          </div>
        </div>
        <h3>Tuesday</h3>
      </div>
    </div>
    <footer><i>Arcada Navigator v1.0.1</i></footer>
  </div>
</template>

<script>
import AppReturnButton from '../components/AppReturnButton.vue';
import axios from 'axios';

export default {
  components: {
    AppReturnButton,
  },

  data: () => ({
    days: {},
  }),
  created() {
    this.getLunch();
  },
  methods: {
    getLunch() {
      axios
        .get(
          `https://www.foodandco.fi/modules/json/json/Index?costNumber=3003&language=en`
        )
        .then((response) => {
          this.days = response.data.MenusForDays;
          // console.log(this.days);
        });
    },
  },
};
</script>

<style scoped>
#logo {
  margin: -30px;
  margin-bottom: 20px;
}

.textbox {
  margin: 0px 200px;
}

p {
  margin-top: 30px;
  text-align: left;
  font-size: 27px;
}

footer {
  position: fixed;
  bottom: 0;
  color: rgb(101, 101, 101);
  width: 100%;
  margin-bottom: 10px;
}

.center-div {
  margin: 0 auto;
  max-width: 900px;
  height: 100px;
  border-radius: 3px;
}

@media screen and (max-width: 600px) {
  .center-div {
    margin: 20px;
    max-width: 700px;
    height: 100px;
    border-radius: 3px;
  }

  #logo {
    margin: 0;
  }
}

h2 {
  font-size: 40px;
  font-weight: 700;
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
