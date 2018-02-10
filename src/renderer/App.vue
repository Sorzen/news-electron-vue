<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    background: #2d8cf0;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
  }

  .layout-footer-center {
    text-align: center;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <Header :style="{position: 'fixed', width: '100%', zIndex: '999'}">
        <Menu
          mode="horizontal"
          theme="dark"
          active-name="1"
          collapsible
          breakpoint="md">
          <!--<div class="layout-logo">新闻</div>-->
          <div class="layout-nav">
            <router-link :to="{ path:'/' }">
              <MenuItem name="1">
                <Icon type="ios-navigate"></Icon>
                新闻
              </MenuItem>
            </router-link>

            <router-link :to="{ path:'/type' }">
              <MenuItem name="2">
                <Icon type="ios-keypad"></Icon>
                分类
              </MenuItem>
            </router-link>
          </div>
        </Menu>
      </Header>
      <Content :style="{margin: '88px auto 0', minHeight: '500px', overflow: 'hidden'}">
        <router-view></router-view>
      </Content>
      <Footer class="layout-footer-center">Sorzen</Footer>
    </Layout>
  </div>
</template>
<script>
  export default {}
</script>