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
      <div class="center-div" v-if="days[0]">
        <h2>Lunch</h2>
        <div class="flex-box-1">
          <h3>Monday</h3>
          <div v-for="day in days[0].SetMenus" :key="day.Date">
            {{ day.Name + ": " }}
            <div v-for="component in day.Components" :key="component">
              {{ component + ", " }}
            </div>
          </div>
        </div>
        <div class="flex-box-2">
          <h3>Tuesday</h3>
          <div v-for="day in days[1].SetMenus" :key="day.Date">
            {{ day.Name + ": " }}
            <div v-for="component in day.Components" :key="component">
              {{ component + ", " }}
            </div>
          </div>
        </div>
        <div class="flex-box-3">
          <h3>Wednesday</h3>
          <div v-for="day in days[2].SetMenus" :key="day.Date">
            {{ day.Name + ": " }}
            <div v-for="component in day.Components" :key="component">
              {{ component + ", " }}
            </div>
          </div>
        </div>
        <div class="flex-box-4">
          <h3>Thursday</h3>
          <div v-for="day in days[3].SetMenus" :key="day.Date">
            {{ day.Name + ": " }}
            <div v-for="component in day.Components" :key="component">
              {{ component + ", " }}
            </div>
          </div>
        </div>
        <div class="flex-box-5">
          <h3>Friday</h3>
          <div v-for="day in days[4].SetMenus" :key="day.Date">
            {{ day.Name + ": " }}
            <div v-for="component in day.Components" :key="component">
              {{ component + ", " }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer><i>Arcada Navigator v1.0.1</i></footer>
  </div>
</template>

<script>
import AppReturnButton from "../components/AppReturnButton.vue";
import axios from "axios";

export default {
  components: {
    AppReturnButton,
  },
  metaInfo: {
    title: "Lunch",
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
          console.log(this.days);
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
.flex-box-1 {
  display: flex;
  flex-direction: row;
  padding: 30px;
  align-content: center;
  justify-content: center;
  background-color: grey;
}
.flex-box-2 {
  display: flex;
  flex-direction: row;
  padding: 30px;
  align-content: center;
  justify-content: center;
  background-color: rgb(240, 222, 222);
}
.flex-box-3 {
 display: flex;
  flex-direction: row;
  padding: 30px;
  align-content: center;
  justify-content: center;
  background-color: rgb(189, 70, 70);
}
.flex-box-4 {
  display: flex;
  flex-direction: row;
  padding: 30px;
  align-content: center;
  justify-content: center;
  background-color: rgb(221, 55, 55);
}
.flex-box-5 {
  display: flex;
  flex-direction: row;
  padding: 30px;
  align-content: center;
  justify-content: center;
  background-color: rgb(65, 43, 43);
}
</style>
