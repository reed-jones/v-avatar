<template>
  <div id="app">
    <v-avatar
      mode='robohash'
      :size='512'
      :robohashOptions='{sets: "set4", bgset: "bg2"}'
      username='fuzzykitten'
       />
      <!-- name='Reed Jones' -->
  </div>
</template>

<script>
import VAvatar from './components/VAvatar'

export default {
  name: 'app',
  components: {
    VAvatar
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
