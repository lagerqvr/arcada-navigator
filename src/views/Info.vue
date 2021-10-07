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
      <div class="center-div">
        <h2>Info</h2>

        <p>This is Arcada Navigator, an app made by a group of students at Arcada. Arcada Navigator was created in order to make navigating the Arcada-building a bit easier. The app was also baked with some quality of life features like a lunch-menu and HSL schedules. </p>
        <p class="text-center">We hope you enjoy this app ❤️</p>

      </div>
    </div>
    <footer><i>Arcada Navigator v1.0.1</i></footer>
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
  font-size: 27px;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  color: rgb(101, 101, 101);
}

.center-div
{
  margin: 0 auto;
  max-width: 900px;
  height: 100px;
  border-radius: 3px;
}

@media screen and (max-width: 600px) {
   .center-div {
        margin: 20px;
        max-width: 700px;
        height: 100px;
        border-radius: 3px;
   } 

   #logo {
     margin: 0;
   }
}

h2 {
  font-size: 40px;
  font-weight: 700;
}

</style>
