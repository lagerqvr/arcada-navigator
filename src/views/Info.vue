<template>
<div>
  <AppReturnButton />
<img
      id="logo"
      @click="$router.push('/')"
      src="../assets/arcada_logo.png"
      height="200px"
    />
  </div>
</template>


<script>
import AppReturnButton from '../components/AppReturnButton.vue';

export default {
  components: { AppReturnButton },
      
methods: {
    
  }
}

</script>

<style scoped>

#logo {
  margin: -30px;
}
</style>
