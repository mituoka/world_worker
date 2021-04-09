<template>
    <div class="menu-header">
      <div class="logo-title-area clearfix">
        <router-link to="/">
          <div class="site-logo">
            <img src="../assets/logo.png" width="10px" height="10px" />
            <div class="site-name">
              <h3>{{ app_name }}</h3>
            </div>
          </div>
        </router-link>
      </div>
      <div class="top-menu-area clearfix">
        <!-- <li><router-link to="/about"><div class="top-menu-item-text clearfix">{{topmenuitem1}}</div></router-link></li>
          <li><router-link to="/english"><div class="top-menu-item-text clearfix">{{topmenuitem2}}</div></router-link></li>
          <li><router-link to="/"><div class="top-menu-item-text clearfix">{{topmenuitem3}}</div></router-link></li> -->
        <router-link to="/about"
          ><button type="button" class="btn btn-outline-primary">
            About
          </button></router-link
        >
        <router-link to="/english"
          ><button type="button" class="btn btn-outline-primary">
            English
          </button></router-link
        >
        <router-link to="/about"
          ><button type="button" class="btn btn-outline-primary clearfix">
            物価
          </button></router-link
        >
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      app_name: 'WORLD WORKER',
    };
  },
}
</script>

<style>
.menu-header {
  overflow: hidden;
  height: 3%;
}

.site-logo {
  height: 30px;
  display: inline-block;
  margin: 20px 30px;
}

.logo-title-area {
  float: left;
  clear: left;
}

.site-name {
  display: inline-block;
}

.menu-logo-title-area {
  overflow: hidden;
}

.top-menu-area {
  right: 0;
  margin: 20px 20px 30px 70%;
}

.top-menu-area button {
  display: inline-block;
  margin: 5px;
}


</style>