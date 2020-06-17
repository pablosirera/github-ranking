<template>
  <section class="section">
    <b-field label="Type your github user">
      <b-input v-model="userName" />
    </b-field>
    <b-button type="is-success" rounded @click="searchUser">Search me</b-button>
    <section class="section">
      <!-- <UserList /> -->
      <pre>{{ user }}</pre>
    </section>
  </section>
</template>

<script>
import { getContributions } from '@/utils/api/contributions'

export default {
  name: 'HomePage',
  data: () => ({
    userName: null,
    user: null
  }),
  methods: {
    async searchUser() {
      const data = await getContributions(
        process.env.GITHUB_SECRET_TOKEN,
        this.userName
      )
      this.user = data
    }
  }
}
</script>
