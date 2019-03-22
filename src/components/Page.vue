<template>
  <div
    class="page"
    :id="id"
    :class="{[className]: className, 'has-header': hasHeader, 'has-navbar': hasFooter }"
  >
    <slot title="header"></slot>
    <section class="page-content">
      <slot title="content"></slot>
    </section>
    <slot title="footer"></slot>
    <Navbar/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '@components/Header'
  import Navbar from '@components/Navbar'
  export default {
    name: 'Page',
    props: {
      className: String,
      id: String,
      hasHeader: {
        type: Boolean,
        default: true
      },
      hasFooter: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {}
    },
    components: {
      Header,
      Navbar
    },
    methods: {}
  }
</script>
