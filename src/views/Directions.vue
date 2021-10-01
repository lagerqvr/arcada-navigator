<template>
  <div>
    <Sidemenu />
    <button @click="buttonPress" id="button">Push</button>
    <div class="map-container">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <img
          :src="require('../assets/floor2.png')"
          class="floor"
          draggable="false"
          v-if="currentFloor == 2"
          key="floor2"
        />
        <img
          :src="require('../assets/floor3.png')"
          class="floor"
          draggable="false"
          v-else-if="currentFloor == 3"
          key="floor3"
        />
        <img
          :src="require('../assets/floor4.png')"
          class="floor"
          draggable="false"
          v-else-if="currentFloor == 4"
          key="floor4"
        />
        <img
          :src="require('../assets/floor5.png')"
          class="floor"
          draggable="false"
          v-else-if="currentFloor == 5"
          key="floor5"
        />
      </transition>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 400 220"
      >
        <path id="path" :d="navigationPath[currentStep]" :key="render" />
      </svg>
      <div
        class="endpoint"
        v-show="showMarker"
        :style="{ top: endpoint.top, left: endpoint.left }"
      >
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        viewBox="0 0 16 16"
        xml:space="preserve"
        class="start"
        v-show="currentFloor == 2"
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
</template>

<script>
import Vue from 'vue';
import ProgressBar from 'progressbar.js';
import Sidemenu from '../components/Sidemenu.vue';
import paths from '../assets/paths.json';

export default {
  components: {
    Sidemenu,
  },
  methods: {
    animatePath() {
      // let t = this.target;
      // let v = this.pathAnimation.value();
      // let d = t > v ? t - v : v - t;
      this.render++; // får <path> att re-rendera, annars detectar vue inte alltid att :d="" förändras

      Vue.nextTick(() => {
        this.pathAnimation = new ProgressBar.Path('#path');

        this.pathAnimation.animate(
          this.target,
          {
            duration: 2500,
          },
          () => {
            if (this.targetStep != this.currentStep) {
              setTimeout(() => {
                this.currentFloor = this.targetFloor;
                this.pathAnimation.set(0);
                setTimeout(() => {
                  this.currentStep++;
                  this.animatePath();
                  this.showMarker = true;
                }, 1000);
              }, 3000);
            }
            this.animateMarker = false;
            if (this.target == 1 && this.showMarker == true) {
              this.animateMarker = true;
            } else {
              this.animateMarker = false;
            }
          }
        );
      });
    },
    buttonPress() {
      this.navigateToRoom('B3');
    },
    navigateToRoom(room) {
      let block = room.charAt(0);
      let floorNr = room.charAt(1);
      let floor = paths['floor' + floorNr];
      this.targetFloor = floorNr;
      this.targetStep = floor[block][2];

      if (floorNr == 2) {
        this.navigationPath[0] = floor[block][0];
        this.showMarker = true;
      } else {
        this.navigationPath[0] = paths.floor2.elevator[0];
        this.navigationPath[1] = floor[block][0];
      }
      this.endpoint.top = floor[block][3];
      this.endpoint.left = floor[block][4];

      this.animatePath();
      // this.currentPath =
      // if (block != 'T' || block != 'M') {
      //   console.log('not t nor m');
      // }
    },
  },
  mounted() {
    this.pathAnimation = new ProgressBar.Path('#path', {
      duration: 3000,
    });
    // this.navigateToRoom('F3');
  },
  data: function() {
    return {
      target: 1,
      pathAnimation: null,
      animateMarker: false,
      currentFloor: 2,
      currentStep: 0,
      targetStep: 0,
      targetFloor: 2,
      navigationPath: ['m 301.3 150 c -14 0 -20 -8 -20 -19 l 0 -22.5'],
      showMarker: false,
      endpoint: {},
      render: 0,
    };
  },
};
</script>

<style scoped>
.map-container {
  position: absolute;
  display: inline-block;
  right: 5%;
  top: 15%;
}
#path {
  fill: none;
  stroke: #8989ff;
  stroke-width: 2.5;
}
svg {
  position: absolute;
  top: 0px;
  left: 0px;
  max-width: 100%;
}

.floor {
  display: block;
  max-width: 100%;
  pointer-events: none;
  --animate-duration: 0.1s;
}

#button {
  position: absolute;
  z-index: 1;
}

.endpoint {
  position: absolute;
  top: 0;
  left: 0;
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

.start {
  position: absolute;
  width: 2.75%;
  top: 54.1%;
  left: 74%;
  z-index: 0;
}
</style>
