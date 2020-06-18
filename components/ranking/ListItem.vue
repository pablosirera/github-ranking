<template>
  <li :class="index > 3 ? 'list-sm' : 'leader'">
    <p class="list-index">{{ index }}</p>
    <img
      :src="img"
      :class="index > 3 ? 'avatar avatar-sm' : 'avatar avatar-lg'"
    />
    <div class="userinfo">
      <p class="username">{{ name }}</p>
      <p class="brownies">
        <span>
          <b>{{ contributions }}</b> contributions
        </span>
        <span>
          <b>{{ followers }}</b> followers
        </span>
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    index: {
      type: Number,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    followers: {
      type: Number,
      default: 0
    },
    contributions: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
$blue: #e9f2fe;
$green: #74f3a5;
$yellow: #ffda6d;
$purple: #b4a3ff;

li {
  list-style: none;

  .userinfo {
    display: inline-block;
  }
  .username {
    margin: 0;
    font-size: 0.95em;
    font-weight: 600;
  }
}
.avatar {
  border-radius: 100%;
}
.avatar-sm {
  max-height: 32px;
  float: center;
  margin-right: 2em;
}
.avatar-lg {
  border-style: double;
  border-color: #ddd;
  border-width: 0.25em;
  box-shadow: 0px 2px 4px $blue;
}
.brownies {
  font-size: 0.75em;
  color: #888;
  display: flex;
  flex-direction: column;
}

.leader {
  display: inline-block;
  vertical-align: text-bottom;
  text-align: center;
  width: 33%;
  z-index: 1;
  position: relative;

  .list-index {
    background-color: $green;
    border-radius: 100%;
    width: 1.45em;
    height: 1.45em;
    vertical-align: middle;
    line-height: 1.4em;
    font-size: 0.95em;
    color: white;
    font-weight: 700;
    position: absolute;
    left: 44.5%;
    bottom: 55px;

    @media (max-width: $mobile) {
      top: 92px;
      bottom: unset;
      left: 40%;
    }
  }

  &:nth-child(1) {
    .list-index {
      width: 1.5em;
      height: 1.5em;
      line-height: 1.45em;
      font-size: 1em;
      background-color: $yellow;
    }
  }
  &:nth-child(2) {
    float: left;
    padding-top: 32px;

    .list-index {
      background-color: $purple;

      @media (max-width: $mobile) {
        top: 92px + 32px;
      }
    }
  }

  &:nth-child(3) {
    float: right;
    padding-top: 36px;

    .list-index {
      @media (max-width: $mobile) {
        top: 92px + 36px;
      }
    }
  }
}
.list-index {
  display: inline-block;
}

.list-sm {
  margin: 0 2em;
  padding: 2em 0;
  box-shadow: 0px 1px 1px #e9f2fe;
  * {
    vertical-align: middle;
  }
  .list-index {
    padding-right: 2em;
  }
}

@media (max-width: $mobile) {
  .list-sm {
    margin: 0;
    padding: 1em 0;
  }
}
</style>
