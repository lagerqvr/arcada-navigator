<template>
  <div>
    <div class="welcome-container sb">
      <a @click="openMenu('se')" class="a"
        >Välkommen! Hur kan jag hjälpa dig idag?</a
      >
      <a @click="openMenu('en')" class="a">
        Welcome! How can I help you today?</a
      >
      <a @click="openMenu('fi')" class="a"
        >Tervetuloa! Kuinka voin auttaa sinua tänään?</a
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openMenu(lang) {
      this.$emit('open-menu');
      this.$emit('choose-lang', lang);
    },
  },
};
</script>

<style scoped>
.welcome-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  background-color: rgba(129, 41, 144);
  width: 900px;
  height: 500px;
  padding: 20px;
  border-radius: 10px;
}
.a {
  color: white;
  font-size: 2.2em;
  height: 33%;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  line-height: 151px;
  text-decoration: none;
}
.sb:before {
  content: '';
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid #812990;
  border-right: 10px solid transparent;
  border-top: 10px solid #812990;
  border-bottom: 10px solid transparent;
  bottom: -19px;
  right: 50%;
}
</style>
