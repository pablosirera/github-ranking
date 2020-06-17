<template>
  <div>
    <Header :recent="isRecent" :sort-recent="sortRecent" :sort-all="sortAll" />
    <ul id="user-list">
      <ListItem
        v-for="(user, index) in dataArr"
        :key="index"
        :index="index + 1"
        :img="getImg(user.img, index)"
        :name="user.username"
        :is-recent="isRecent"
        :recent="user.recent"
        :alltime="user.alltime"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    isRecent: true,
    dataRecent: [],
    dataAll: []
  })
}
</script>
