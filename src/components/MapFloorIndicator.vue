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
        <p ref="5">
          5
        </p>
      </div>
      <div class="floor">
        <p ref="4">
          4
        </p>
      </div>
      <div class="floor">
        <p ref="3">
          3
        </p>
      </div>
      <div class="floor">
        <p ref="2" class="active">
          2
        </p>
      </div>
      <div class="floor">
        <p ref="1">
          1
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toFloor(floor) {
      clearTimeout(this.timer);
      this.indicatorPosition = 85 - (floor - 1) * 20;
      for (let i = 1; i < 6; i++) {
        if (i != floor) {
          this.$refs[i].className = '';
        }
      }
      this.timer = setTimeout(() => {
        this.$refs[floor].className = 'active';
      }, 1700);
    },
  },
  data() {
    return {
      indicatorPosition: 65,
      transitionTime: '2s',
      timer: null,
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
  margin: -5px 0;
  font-size: 1.8rem;
}

.floor p {
  transition: 1s;
}

.floor > .active {
  transform: scale(1.2);
  color: red;
  font-weight: bold;
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
