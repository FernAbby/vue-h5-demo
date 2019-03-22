<template>
  <header class="header-container">
    <div
      class="button back"
      v-html="backText"
      v-if="showBack"
      @click="onBackClick()"
    ></div>
    <h1 class="title" v-text="title"></h1>
    <div
      class="button"
      v-html="menuText"
      v-if="showMenu"
    ></div>
  </header>
</template>

<script>
  import state from '@/config/state'
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
    },
    methods: {
      onBackClick() {
        if (this.onBack) {
          this.onBack()
          return
        }

        if (state.__push_method__ === 'push') {
          let root = document.querySelector('[amans-app]')
          if (root) root.setAttribute('transition-direction', 'back')
          history.go(-1)
        }
      }
    }
  }
</script>
