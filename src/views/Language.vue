<template> 
<div>
  <AppReturnButton />
<img
      id="logo"
      @click="$router.push('/')"
      src="../assets/arcada_logo_v2.png"
      height="200px"
    />
    <div>
      <div class="center-div">
        <h2>Change language</h2>

        <p class="text-center">Coming soon!</p>

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
  margin-bottom: 20px;
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
  position: fixed;
  bottom: 0;
  color: rgb(101, 101, 101);
  width: 100%;
  margin-bottom: 10px;
}

@media screen and (max-height: 850px) {
  footer {
    display: none;
  }
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

.heart {
   border-radius:11px 0;
   font-size:30px;
   line-height:21px;
   text-align:center;
   padding:51px;
   width:201px;
   -webkit-animation:heart-animation 1s infinite;
   -moz-animation:heart-animation 1s infinite;
   -o-animation:heart-animation 1s infinite;
   animation:heart-animation 1s infinite;
}

@webkit-keyframes heart-animation  {
   0%, 100% {
      font-size:22px;
   }
   
   10% {
      font-size:30px;
   }

}

@-moz-keyframes heart-animation  {
   0%, 100% {
      font-size:22px;
   }
   
   50% {
      font-size:30px;
   }

}

@-o-keyframes heart-animation  {
   0%, 100% {
      font-size:22px;
   }
   
   50% {
      font-size:30px;
   }

}

@keyframes heart-animation  {
   0%, 100% {
      font-size:22px;
   }
   
   50% {
      font-size:30px;
   }

}

</style>
