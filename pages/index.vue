<template>
  <section class="section">
    <b-loading :active.sync="isLoaded" :can-cancel="false"></b-loading>

    <b-field label="Type some github users to generate ranking">
      <b-taginput v-model="usersnames" />
    </b-field>
    <b-button type="is-success" rounded @click="searchUser">Search me</b-button>
    <section class="section">
      <UserList v-if="!isLoaded && users.length" :items="users" />
    </section>
  </section>
</template>

<script>
import { getContributions } from '@/utils/api/contributions'

export default {
  name: 'HomePage',
  components: {
    UserList: () => import('@/components/ranking/UserList')
  },
  data: () => ({
    usersnames: null,
    users: [],
    isLoaded: false
  }),
  methods: {
    async searchUser() {
      this.isLoaded = true
      this.users.splice(0, this.users.length)
      for (const name of this.usersnames) {
        const user = await this.fetchContributions(name)
        this.users.push(user)
      }

      this.orderUsers(this.users)
      this.isLoaded = false
    },
    fetchContributions(username) {
      return getContributions(process.env.GITHUB_SECRET_TOKEN, username)
    },
    orderUsers(users) {
      this.users = users.sort((a, b) => {
        if (a.totalContributions > b.totalContributions) {
          return -1
        }
        if (a.totalContributions < b.totalContributions) {
          return 1
        }
        return 0
      })
    }
  }
}
</script>
