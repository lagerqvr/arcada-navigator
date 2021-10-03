<template>
  <router-link to="/" class="return-button">
    <font-awesome-icon class="icon" icon="long-arrow-alt-left" />
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped>
.return-button {
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: rgb(204, 12, 12);
  width: 100px;
  height: 60px;
  border-bottom-left-radius: 10px;
}

.icon {
  height: 100%;
  font-size: 3rem;
  color: #fff;
}
</style>
