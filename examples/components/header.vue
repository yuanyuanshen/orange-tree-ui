<template>
  <div id="header">
    <img src="../assets/img/orange9.png"
         class="header-logo"
         alt="orange">
    <span class="header-title">orange-ui组件库</span>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="less">
div#header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100%;
  height: 70px;
  background: #dc461d;
  z-index: 100;
  display: flex;
  box-shadow: 0 2px 2px #cd5115;
}
.header-title {
  display: inline-block;
  margin: auto 0px;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
}
.header-logo {
  display: inline-block;
  width: 38px;
  height: 40px;
  margin: 10px 4px 15px 20px;
}
</style>
