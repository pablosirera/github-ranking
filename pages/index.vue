<template>
  <section class="section">
    <b-field label="Type some github users to generate ranking">
      <b-taginput v-model="usersnames" />
    </b-field>
    <b-button type="is-success" rounded @click="searchUser">Search me</b-button>
    <section class="section">
      <!-- <UserList /> -->
      <pre>{{ users }}</pre>
    </section>
  </section>
</template>

<script>
import { getContributions } from '@/utils/api/contributions'

export default {
  name: 'HomePage',
  data: () => ({
    usersnames: null,
    users: []
  }),
  methods: {
    async searchUser() {
      for (const name of this.usersnames) {
        const user = await this.fetchContributions(name)
        this.users.push(user)
      }
    },
    fetchContributions(username) {
      return getContributions(process.env.GITHUB_SECRET_TOKEN, username)
    }
  }
}
</script>
