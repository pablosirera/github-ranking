<template>
  <div id="header">
    <h3>
      <span>✧･ﾟ: *✧･ﾟ:* &nbsp;</span>
      Contributions Ranking
      <span>&nbsp;✧･ﾟ: *✧･ﾟ:*</span>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'RankingHeader'
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Catamaran&display=swap');
$yellow: #ffda6d;
$purple: #b4a3ff;

#header {
  padding-top: 0.5em;
  padding-right: 1em;
  font-size: 0.95em;

  & a {
    color: $purple;
    text-decoration: none;
    font-weight: 700;
  }
}

h3 {
  text-align: center;
  font-size: 2em;
  padding-bottom: 0.5em;
  font-family: 'Catamaran';
  font-weight: 500;
  span {
    font-size: 0.66em;
    color: $yellow;
  }
}

@media (max-width: $mobile) {
  h3 {
    display: flex;
    align-items: center;
  }
}
</style>
