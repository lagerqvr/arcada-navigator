<template>
  <div class="dropdown-container">
    <div class="item" @click="toggleDropdown()">
      <p>{{ category }}</p>
      <font-awesome-icon
        class="chevron-right"
        :class="{ active: showDropdown }"
        icon="chevron-right"
      />
    </div>
    <div class="sub-container" v-show="showDropdown">
      <SidemenuItem
        v-for="item in items"
        :key="item.name"
        :name="item.name"
        :info="item.info"
        v-on="$listeners"
      />
    </div>
  </div>
</template>

<script>
import SidemenuItem from '../components/SidemenuItem.vue';

export default {
  components: {
    SidemenuItem,
  },
  data() {
    return {
      showDropdown: false,
    };
  },
  props: {
    category: String,
    items: { name: { info: String } },
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
  mounted() {
  },
};
</script>

<style scoped>
.item {
  display: flex;
  color: #444;
  background: #fff;
  font-size: 1.4rem;
  text-align: left;
  height: 60px;
  padding-left: 25px;
  border-top: 1px solid #e8eaed;
  border-bottom: 1px solid #e8eaed;
  justify-content: space-between;
}

.sub-container .item {
  padding-left: 40px;
  background-color: #f5f5f5;
  justify-content: flex-start;
}

.dropdown-container p {
  margin: auto 0;
  align-items: flex-end;
}

.chevron-right {
  color: #666;
  margin: auto 25px;
  transition: 0.1s;
}
.chevron-right.active {
  transform: rotate(90deg);
}
</style>
