<template>
  <div>
    <RankingHeader />
    <ul id="user-list">
      <ListItem
        v-for="(user, index) in items"
        :key="user.id"
        :index="index + 1"
        :img="user.avatar"
        :name="user.userName"
        :followers="user.followers"
        :contributions="user.totalContributions"
      />
    </ul>
  </div>
</template>

<script>
import RankingHeader from '@/components/ranking/RankingHeader'
import ListItem from '@/components/ranking/ListItem'

export default {
  name: 'UserList',
  components: {
    RankingHeader,
    ListItem
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding: 0 20px;
}

@media (max-width: $mobile) {
  ul {
    padding: 0;
  }
}
</style>
