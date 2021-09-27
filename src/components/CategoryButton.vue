<template>
  <router-link
    :to="{ path: route }"
    class="background"
    :style="{ 'background-color': color }"
  >
    <font-awesome-icon :icon="icon" size="3x" />
    <p>{{ name }}</p>
  </router-link>
</template>

<script>
export default {
  name: 'CategoryButton',
  props: {
    name: String,
    icon: String,
    color: {
      type: String,
    },
    route: {
      type: String,
      default: '.',
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.background {
  color: black;
  padding: 50px 10px;
  margin: 7px;
  flex: 1 0 20%;
  border-radius: 30px;
  text-decoration: none;
}
p {
  font-size: 1.7rem;
}
</style>
