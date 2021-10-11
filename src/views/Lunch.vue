<template>
  <div class="background">
    <AppReturnButton />
    <img
      id="logo"
      @click="$router.push('/')"
      src="../assets/arcada_logo_v2.png"
      height="200px"
    />
    <div>
      <div class="center-div" v-if="days[0]">
        <h2>Lunch</h2>
        <div class="flex-container">
          <div class="flex-item">
            <h3>Monday</h3>
            <div v-for="day in days[0].SetMenus" :key="day.Date">
              <b>{{ day.Name + ': ' }}</b>
              <div v-for="component in day.Components" :key="component">
                {{ component + ', ' }}
              </div>
            </div>
          </div>
          <div class="flex-item item2">
            <h3>Tuesday</h3>
            <div v-for="day in days[1].SetMenus" :key="day.Date">
              <b>{{ day.Name + ': ' }}</b>
              <div v-for="component in day.Components" :key="component">
                {{ component + ', ' }}
              </div>
            </div>
          </div>
          <div class="flex-item">
            <h3>Wednesday</h3>
            <div v-for="day in days[2].SetMenus" :key="day.Date">
              <b>{{ day.Name + ': ' }}</b>
              <div v-for="component in day.Components" :key="component">
                {{ component + ', ' }}
              </div>
            </div>
          </div>
          <div class="flex-item item2">
            <h3>Thursday</h3>
            <div v-for="day in days[3].SetMenus" :key="day.Date">
              <b>{{ day.Name + ': ' }}</b>
              <div v-for="component in day.Components" :key="component">
                {{ component + ', ' }}
              </div>
            </div>
          </div>
          <div class="flex-item">
            <h3>Friday</h3>
            <div v-for="day in days[4].SetMenus" :key="day.Date">
              <b>{{ day.Name + ': ' }}</b>
              <div v-for="component in day.Components" :key="component">
                {{ component + ', ' }}
              </div>
            </div>
          </div>
        </div>
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
  metaInfo: {
    title: 'Lunch',
  },

  data: () => ({
    days: {},
  }),
  created() {
    this.getLunch();
  },
  methods: {
    // API get metod som tar in datan från URLn
    getLunch() {
      axios
        .get(
          `https://www.foodandco.fi/modules/json/json/Index?costNumber=3003&language=en`
        )
        .then((response) => {
          this.days = response.data.MenusForDays;
          console.log(this.days);
        });
    },
  },
};
</script>

<style scoped>
.background {
  height: 100%;
  background-color: #fff;
}

#logo {
  margin: -30px;
  margin-bottom: 5px;
}

.tex-item {
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
  max-width: 100%;
  border-radius: 3px;
}

.flex-container {
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  flex-wrap: wrap;
  width: 95%;
  justify-content: space-evenly;
}

.flex-item {
  flex-wrap: nowrap;
  min-width: 300px;
  width: 17%;
  padding: 25px 30px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 25px 15px;
  margin: 10px 25px;
  text-align: left;
  border-radius: 15px;
  background-color: #812990;
  color: #efefef;
}

.flex-item.item2 {
  background-color: #9736a8;
}

h3 {
  text-align: center;
  margin-bottom: 15px;
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
