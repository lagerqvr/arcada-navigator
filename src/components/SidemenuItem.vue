<template>
  <div class="item" @click="$emit('to-room', name)">
    <p>{{ name }}</p>
    <p class="info" v-if="info">{{ '/' + info }}</p>
  </div>
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
.info {
  margin-left: 15px;
  color: #666;
  font-size: 1.3rem;
}
</style>
