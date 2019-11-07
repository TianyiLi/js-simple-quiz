<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue { }
</script>

<style lang="stylus">
html, body
  margin 0
  padding 0
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  margin-top 60px
*
  &::-webkit-scrollbar
    height 10px
    width 10px
    background-color transparent
  &::-webkit-scrollbar-thumb
    background-color rgba(170, 170, 170, 0.3)
    &:hover
      background-color #777
    border-radius 5px
  &::-webkit-scrollbar-track
    background-color transparent
</style>
