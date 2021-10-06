<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;1,200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Akronim&family=Roboto:wght@300;400;500;600;700&display=swap');

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  user-select: none;
}
body {
  margin: 0;
}
</style>
