<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'
import 'highlight.js/styles/github.css'

hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
hljs.registerLanguage('php', require('highlight.js/lib/languages/php'))

@Component
export default class QuestComponent extends Vue {
  @Prop() quiz!: string
  @Prop() title!: any
  @Prop() answer!: string[]
  @Prop({
    default: 'javascript'
  }) type!: string

  @Prop({
    default: true
  }) hasInput!: boolean

  value: string = ''
  isError = false
  isCorrect = false

  get quizFormat () {
    const _result = hljs.highlight(this.type, this.quiz).value
    return (_result.split('\n').map((line: string, i: number) => `<tr><td>${i + 1}</td><td>${line}</td></tr>`)).join('\n')
    // return _result
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
    <table class="quest"
      v-html="quizFormat"></table>
    <input type="text"
      v-if="hasInput"
      :class="isError && 'error' || ''"
      :disabled="isCorrect"
      v-model="value">
    <button v-if="hasInput"
      @click="onConfirm">Confirm</button>
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
  font-size 14px
  width 30rem
  overflow-x auto
  padding 1rem
  padding-left 0.3rem
  border solid 1px #e1e4e8
  background-color #fafbfc
  margin-bottom 10px
  >>> td:first-child
    width 2em
    line-height 20px
    text-align right
    font-size 14px
    color rgba(27, 31, 35, 0.3)
    padding-right 15px
input
  width 13rem
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
  transition 0.3s
  &:hover
    background #e5e5e5
    color black
  &:active
    transition unset
    background #aaa
    color black
</style>
