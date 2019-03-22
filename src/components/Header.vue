<template>
  <header class="header-container">
    <div class="button back" v-html="backText"></div>
    <h1 class="title" v-text="title"></h1>
    <div class="button" v-html="menuText"></div>
  </header>
</template>

<script>
  const DEFAULT_BACK_TEXT = '<i class="fa fa-angle-left"></i>'
  const DEFAULT_MENU_TEXT = '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  export default {
    name: 'Header',
    props: {
      title: String,
      showBack: {
        type: Boolean,
        default: true
      },
      backText: {
        type: String,
        default: DEFAULT_BACK_TEXT
      },
      onBack: Function,
      showMenu: {
        type: Boolean,
        default: true
      },
      menuText: {
        type: String,
        default: DEFAULT_MENU_TEXT
      },
      onMenu: Function,
      enableTitleTransition: Boolean,
      renderCount: Number
    },
    data() {
      return {}
    }
  }
</script>
