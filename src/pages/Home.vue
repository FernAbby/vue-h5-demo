<template>
  <div class="page has-header has-navbar">
    <Header
      title="Home"
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
            title: 'Home',
            showBack: true
          },
          navBar: {

          }
        },
        msg: 'Welcome to Your Home Page'
      }
    },
    components: {
      Header,
      Navbar
    },
    methods: {}
  }
</script>

<style lang="scss">
  .test {
    font-size: 14px;
  }
</style>
