<template>
<div>
  <AppReturnButton />
<img
      id="logo"
      @click="$router.push('/')"
      src="../assets/arcada_logo.png"
      height="200px"
    />
    <div>
      <article class="textbox">
        <h2>This is a header</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      </article>
    </div>
    <footer>Arcada Navigator v1.0.1</footer>
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

.textbox {
  margin: 0px 200px;
}

p {
  margin-top: 30px;
  text-align: left;
}

</style>
