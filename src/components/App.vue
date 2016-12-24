<template>
  <div id="app">
      <router-view  name="app"></router-view>
      <router-view></router-view>
  <div>
</template>
<style lang="scss">
@import '../assets/css/reset.scss';

  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #app {
    height: 100%;
  }
</style>
