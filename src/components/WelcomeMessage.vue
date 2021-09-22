<template>
  <div>
    <div class="welcome-container speech" v-if="true">
      <p>Välkommen! Hur kan jag hjälpa dig idag?</p>
      <p>Welcome! How can I help you today?</p>
      <p>Tervetuloa! Kuinka voin auttaa sinua tänään?</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .welcome-container {
    position: relative;
    margin: auto;
    background-color: rgba(129, 41, 144);
    width: 50%;
    height: 450px;
    padding: 40px;
    border-radius: 10px;
  }
  p {
    color: white;
    font-size: 1.9rem;
    margin: 80px 0;
  }
  .speech:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid #812990;
    border-right: 10px solid transparent;
    border-top: 10px solid #812990;
    border-bottom: 10px solid transparent;
    bottom: -19px;
}
</style>