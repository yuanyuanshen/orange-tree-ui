<template>
  <div id="app">
    <main-header></main-header>
    <div class="container">
      <side-nav></side-nav>
      <router-view class="view" />
    </div>
  </div>
</template>

<script>
import mainHeader from './components/header'
import sideNav from './components/Nav'
export default {
  name: 'App',
  components: {
    mainHeader,
    sideNav
  }
}
</script>

<style lang="less">
@import "./assets/less/index";

html,
body {
  padding: 0 0;
  margin: 0 0;
  height: 100%;
  width: 100%;
}
#app {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 0;
  padding: 0 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .container {
    position: absolute;
    left: 0;
    top: 70px;
    width: calc(100% - 120px);
    display: flex;
    flex-direction: row;
    margin: 40px 60px;
    background: #fff;
    box-shadow: 0 4px 30px 0 rgba(173, 174, 178, 0.5);
  }
  .view {
    width: calc(100% - 360px);
    height: calc(100% - 40px);
    padding: 20px 40px;
    text-align: left;

    .demo-block {
      padding: 32px;
      border: 1px solid #e6e6e6;
      background-color: #fff;
      margin-top: 16px;
    }
  }
}
</style>
