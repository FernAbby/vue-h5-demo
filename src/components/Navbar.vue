<template>
  <footer class="navbar-container">
    <div class="navbar-item">
      <router-link to="/">
        <i>icon</i>
        <a>首页</a>
      </router-link>
    </div>
    <div class="navbar-item">
      <router-link to="/about">
        <i>icon</i>
        <a>关于</a>
      </router-link>
    </div>
    <div class="navbar-item">
      <router-link to="/">
        <i>icon</i>
        <a>测试</a>
      </router-link>
    </div>
    <div class="navbar-item">
      <router-link to="/about">
        <i>icon</i>
        <a>我的</a>
      </router-link>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {}
    }
  }
</script>
