<template>
  <div class="elevator-container">
    <p>Våning</p>
    <div class="floors-container">
      <font-awesome-icon
        id="indicator"
        icon="long-arrow-alt-left"
        :style="{ top: `${indicatorPosition}%` }"
      />
      <div class="floor">
        <p
          id="f5"
          :style="{
            transform: `scale(${calculateNumberSize(6)})`,
            transition: transitionTime,
          }"
        >
          5
        </p>
      </div>
      <div class="floor">
        <p
          id="f4"
          :style="{
            transform: `scale(${calculateNumberSize(26)}`,
            transition: transitionTime,
          }"
        >
          4
        </p>
      </div>
      <div class="floor">
        <p
          id="f3"
          :style="{
            transform: `scale(${calculateNumberSize(46)})`,
            transition: transitionTime,
          }"
        >
          3
        </p>
      </div>
      <div class="floor">
        <p
          id="f2"
          :style="{
            transform: `scale(${calculateNumberSize(66)})`,
            transition: transitionTime,
          }"
        >
          2
        </p>
      </div>
      <div class="floor">
        <p
          id="f1"
          :style="{
            transform: `scale(${calculateNumberSize(86)})`,
            transition: transitionTime,
          }"
        >
          1
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    calculateNumberSize(number) {
      return 155 - Math.abs(this.transitionalValue - number) + '%';
    },
    toFloor(floor) {
      this.indicatorPosition = 86 - (floor - 1) * 20;

      this.floor = floor - 2;
      this.transitionTime = 0.5 / this.floor + 's';

      clearTimeout(this.timer);
      // this.transitionTime = 3 / this.floor + 's';
      this.animate();
      console.log(3000 / this.floor || 1);
    },
    animate() {
      let i = this.transitionalValue;
      let t = this.indicatorPosition;
      // console.log(i, t);
      // console.log('time ' + 3000 / this.floor);
      if (i != t) {
        this.transitionalValue += i > t ? -5 : 5;
        this.timer = setTimeout(() => {
          this.animate();
        }, 500 / this.floor);
      }
    },
  },
  data() {
    return {
      indicatorPosition: 66,
      transitionalValue: 66,
      transitionTime: '2s',
      timer: null,
      floor: 0,
    };
  },
};
</script>

<style scoped>
.elevator-container {
  position: absolute;
  top: 0;
  right: 9%;
  width: 15%;
  height: 25%;
  text-align: left;
  z-index: 5;
}

.elevator-container > p {
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
}

.floors-container {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  transition: 3s;
}

.floor {
  display: block;
  width: 100%;
  margin: 3px 0px;
  font-size: 1.4rem;
}

.floors-container p {
  margin: 0;
  padding: 0;
  width: fit-content;
}

#indicator {
  position: absolute;
  top: 85%;
  left: 13%;
  transition: 2s;
}
</style>
