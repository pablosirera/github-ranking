<template>
  <div class="global-layout">
    <section class="main-content columns">
      <aside class="column is-2 section">
        <ul class="menu-list">
          <li>
            <GithubButton />
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
    <footer class="footer">
      <a target="_blank" href="https://twitter.com/pablosirera">Twitter</a>
      <span class="heart">💚</span>
      <a target="_blank" href="https://github.com/pablosirera">Github</a>
    </footer>
  </div>
</template>

<script>
import GithubButton from '@/components/GithubButton'

export default {
  components: {
    GithubButton
  }
}
</script>

<style lang="scss" scoped>
.global-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.footer {
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  z-index: 10;

  a {
    color: #167df0;
  }

  .heart {
    margin: 0 10px;
  }
}
</style>
