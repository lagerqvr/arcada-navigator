<template>
  <div class="item" @click="$emit(name)">
    <p>{{ name }}</p>
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

<style></style>
