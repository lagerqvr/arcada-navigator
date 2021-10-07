<template>
  <a class="item" @click="$emit('to-room', this.name)">
    <p>{{ name }}</p>
    <p class="info" v-if="info">{{ '/' + info }}</p>
  </a>
</template>

<script>
export default {
  props: {
    name: String,
    info: String,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.info {
  margin-left: 15px;
  color: #666;
  font-size: 1.3rem;
}

.item:hover {
  background-color: #812990e8 !important;
  color: white;
}

.item:hover .info {
  color: #ccc;
}

p {
  margin: auto 0;
}
</style>
