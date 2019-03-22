<template>
  <div id="amans-app">
    <transition name="page" v-on:before-enter="beforePageEnter">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      beforePageEnter (el) {
        console.log(el)
        // console.log('beforePageEnter time:', +new Date())
      }
    }
  }
</script>
