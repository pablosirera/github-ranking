<template>
  <!-- Place this tag where you want the button to render. -->
  <a
    class="github-button"
    :href="href"
    data-color-scheme="no-preference: light; light: light; dark: dark;"
    data-size="large"
    :data-show-count="showCount"
    :aria-label="ariaLabelText"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'GithubButton',
  props: {
    showCount: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'star',
      validate: value => ['star', 'follow'].includes(value)
    }
  },
  computed: {
    ariaLabelText() {
      return this.type === 'star'
        ? `Star pablosirera/github-ranking on Github`
        : 'Follow @pablosirera on Github'
    },
    href() {
      return this.type === 'star'
        ? 'https://github.com/pablosirera/github-ranking'
        : 'https://github.com/pablosirera'
    },
    text() {
      return this.type === 'star' ? 'Star' : 'Follow @pablosirera'
    }
  }
}
</script>
