<template>
  <div>
    <Sidemenu />
    <button @click="buttonPress" id="button">Push</button>
    <div class="map-container">
      <img src="../assets/floor2.png" class="floor" draggable="false" />
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 516.3 190"
      >
        <path
          id="path"
          d="M 370 155 C 340 137 321 138 300 138 L 186 138 C 181 138 181 135 181 133 C 181 131.6667 181 129 178 129 C 176 129 175 129 175 125 L 175 100"
        />
      </svg>
      <div class="endpoint">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          viewBox="0 0 425.963 425.963"
          xml:space="preserve"
          class="marker"
          :class="{
            animate__animated: animateMarker,
            animate__bounce: animateMarker,
          }"
        >
          <path
            d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081   c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002   c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482   C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884   c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          viewBox="0 0 16 16"
          xml:space="preserve"
          class="circle"
        >
          <path
            class="inner"
            fill="#444444"
            d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
          />
          <path
            class="outer"
            fill="#444444"
            d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from 'progressbar.js';
import Sidemenu from '../components/Sidemenu.vue';

export default {
  components: {
    Sidemenu,
  },
  methods: {
    changeProgress: function() {
      let t = this.target;
      let v = this.myAnimation.value();
      let d = t > v ? t - v : v - t;

      this.myAnimation.animate(
        this.target,
        {
          duration: 2000 * d,
        },
        () => {
          console.log();
          if (this.target == 1 && this.animateMarker !== true) {
            this.animateMarker = true;
          } else {
            this.animateMarker = false;
          }
        }
      );
    },
    buttonPress() {
      this.changeProgress(
        this.target == 1 ? (this.target = 0) : (this.target = 1)
      );
    },
  },
  mounted() {
    this.myAnimation = new ProgressBar.Path('#path', {
      duration: 2000,
    });
    this.myAnimation.set(0);
    this.changeProgress();
  },
  data: function() {
    return {
      target: 1,
      myAnimation: null,
      animateMarker: false,
    };
  },
};
</script>

<style scoped>
.map-container {
  position: absolute;
  display: inline-block;
  right: 0px;
}
#path {
  fill: none;
  stroke: red;
  stroke-width: 2px;
  stroke-linejoin: round;
  stroke-miterlimit: 0;
  stroke-linecap: round;
}
svg {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1800px;
  max-width: 100%;
}

.floor {
  display: block;
  max-width: 100%;
  pointer-events: none;
}

#button {
  position: absolute;
  z-index: 1;
}

.endpoint {
  position: absolute;
  top: 0;
  left: 0;
  top: 28.8%;
  left: 32.4%;
  width: 3%;
  z-index: 1;
}

.endpoint > svg {
  position: absolute;
  top: 0px;
}

.marker {
  z-index: 1;
  fill: red;
  --animate-duration: 1.5s;
}

.circle {
  width: 60%;
  margin: 67% 20%;
}
</style>
