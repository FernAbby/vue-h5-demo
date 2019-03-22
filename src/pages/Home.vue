<template>
  <div class="page has-header has-navbar">
    <Header
      title="测试"
    />
    <section class="page-content">
      <div class="test">{{msg}}</div>
    </section>
    <Navbar />
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '@components/Header'
  import Navbar from '@components/Navbar'
  export default {
    name: 'Home',
    data () {
      return {
        pageSetting: {
          headerBar: {
            title: '测试',
            showBack: true
          },
          navBar: {

          }
        },
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      Header,
      Navbar
    },
    methods: {
        beforePageEnter(el) {
          console.log(el)
        // console.log('beforePageEnter time:', +new Date())
      }
    }
  }
</script>

<style lang="scss">
  .test {
    font-size: 14px;
  }
</style>
