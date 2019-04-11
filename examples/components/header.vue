<template>
  <div id="header">
    <div class="logo">
      <img src="../assets/img/orange9.png"
           class="header-logo"
           alt="orange">
      <span class="header-title">orange-ui组件库</span>
    </div>
    <div class="link">
      <a href="https://github.com/yuanyuanshen/orange-tree-ui"
         class="endLink">组件</a>
      <i class="o-icon-github2"></i>
      <a href="https://github.com/yuanyuanshen/orange-tree-ui">github</a>
      <i class="o-icon-yonghu1"></i>
      <span>yuanyuanshen</span>
    </div>
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .logo {
    display: flex;
  }
  .link {
    display: flex;
    > a {
      margin: auto;
      color: #ffffff;
      width: 100px;
      font-size: 16px;
      text-decoration: underline;
    }
    > .endLink {
      text-decoration: none;
      font-weight: 600;
    }
    > span {
      margin: auto;
      color: #ffffff;
      width: 160px;
      font-size: 16px;
    }
    > i {
      margin: auto;
      color: #ffffff;
      margin-right: -26px;
    }
  }
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
  width: 46px;
  margin: 8px 10px 8px 20px;
}
</style>
