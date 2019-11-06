<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'
import 'highlight.js/styles/github.css'

hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))

@Component
export default class QuestComponent extends Vue {
  @Prop() quiz!: string
  @Prop() title!: any
  @Prop() answer!: string[]

  value: string = ''
  isError = false
  isCorrect = false

  get quizFormat () {
    return hljs.highlight('javascript', this.quiz).value
  }

  onConfirm () {
    const _value = this.value.split(/,/).join(',')
    if (_value) {
      this.isError = !(_value === this.answer.join(','))
      this.isCorrect = !this.isError
    } else {
      this.isError = true
    }
  }
}
</script>
<template>
  <div class="input-group">
    <h3># {{''+title}}</h3>
    <pre class="quest"
      v-html="quizFormat"></pre>
    <input type="text"
      :class="isError && 'error' || ''"
      :disabled="isCorrect"
      v-model="value">
    <button @click="onConfirm">Confirm</button>
  </div>
</template>
<style lang="stylus" scoped>
.input-group
  width 30rem
  display block
  padding 1rem 1.5rem
  border-radius 5px
  border solid 1px #e1e1e1
  box-shadow 0 10px 20px rgba(0, 0, 0, 0.2)
  margin 15px auto
.quest
  font-size 1.25em
  padding 1rem
  padding-left 0.3rem
  border-left 1rem solid rgba(0, 0, 0, 0.4)
  background-color rgba(0, 0, 0, 0.2)
input
  width 13rem
  margin-left 1rem
  padding 0.3rem 0.5rem
  font-size 1.25em
  border-radius 3px
  border solid 1px lightgray
  &.error
    outline red
    box-shadow 0 0 10px red
  &[disabled]
    outline green
    box-shadow 0 0 10px green

button
  appearance none
  cursor pointer
  background unset
  border unset
  padding 0.3rem 1.5rem
  font-size 1.25rem
  background #484848
  color white
  font-weight bold
  float right
  transition .3s
  &:hover
    background #e5e5e5
    color black
  &:active
    transition unset
    background #aaa
    color black
</style>
