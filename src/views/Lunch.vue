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
        <p v-if="info.MenusForDays">{{ info.MenusForDays[0].SetMenus[0].Components[0] }}</p>
        <p v-if="info.MenusForDays">{{ info.MenusForDays[0].SetMenus[1].Components[0] + ", " + info.MenusForDays[1].SetMenus[1].Components[1] + ", " + info.MenusForDays[0].SetMenus[1].Components[2] }}</p>
        <h3>Tuesday</h3>
        <p v-if="info.MenusForDays">{{ info.MenusForDays[1].SetMenus[0].Components[0] }}</p>
        <p v-if="info.MenusForDays">{{ info.MenusForDays[1].SetMenus[1].Components[0] + ", " + info.MenusForDays[1].SetMenus[1].Components[1] + ", " + info.MenusForDays[1].SetMenus[1].Components[2] }}</p>


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
     AppReturnButton 
  },

  data: () => ({
    info: {},

  }),
  created() {
     this.getLunch()
  },
  methods: {
         getLunch() {
      axios
        .get(
          `https://www.foodandco.fi/modules/json/json/Index?costNumber=3003&language=en`
        )
        .then((response) => {
          this.info = response.data;
          console.log(response.data);
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

.heart {
  border-radius: 11px 0;
  font-size: 30px;
  line-height: 21px;
  text-align: center;
  padding: 51px;
  width: 201px;
  -webkit-animation: heart-animation 1s infinite;
  -moz-animation: heart-animation 1s infinite;
  -o-animation: heart-animation 1s infinite;
  animation: heart-animation 1s infinite;
}

@webkit-keyframes heart-animation {
  0%,
  100% {
    font-size: 22px;
  }

  10% {
    font-size: 30px;
  }
}

@-moz-keyframes heart-animation {
  0%,
  100% {
    font-size: 22px;
  }

  50% {
    font-size: 30px;
  }
}

@-o-keyframes heart-animation {
  0%,
  100% {
    font-size: 22px;
  }

  50% {
    font-size: 30px;
  }
}

@keyframes heart-animation {
  0%,
  100% {
    font-size: 22px;
  }

  50% {
    font-size: 30px;
  }
}
</style>
