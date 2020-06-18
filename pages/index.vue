<template>
  <section class="section">
    <b-loading :active.sync="isLoaded" :can-cancel="false"></b-loading>

    <div class="header">
      <h1>
        <img src="@/assets/mark-github.svg" />
        Github ranking
      </h1>
      <p>
        Type all users what you prefer and generate ranking to see who is the
        winner.
      </p>
    </div>
    <b-field>
      <b-taginput v-model="usersnames" placeholder="Github users" expanded />
    </b-field>
    <b-field>
      <b-select v-model="year" placeholder="Select year" expanded>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
      </b-select>
    </b-field>
    <b-button
      :disabled="usersnames && !usersnames.length"
      type="is-info"
      @click="searchUser"
    >
      Create ranking
    </b-button>
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
    isLoaded: false,
    year: null
  }),
  methods: {
    async searchUser() {
      this.isLoaded = true
      this.users.splice(0, this.users.length)
      for (const name of this.usersnames) {
        const response = await this.fetchContributions(name, +this.year)
        if (response.errors) {
          this.$toasted.error('One of the users are not found')
        } else {
          this.users.push(response)
        }
      }

      this.orderUsers(this.users)
      this.isLoaded = false
    },
    fetchContributions(username, year) {
      return getContributions(process.env.GITHUB_SECRET_TOKEN, username, year)
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
  },
  head() {
    return {
      title: 'Github Contributions Ranking'
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 42px;

    img {
      width: 40px;
    }
  }

  p {
    font-size: 18px;
  }
}
</style>
