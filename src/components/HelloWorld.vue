<template>
  <div class="quiz-ctn">
    <h1>What is the console?</h1>
    <Quiz :quiz="quest.quiz"
      :key="i"
      :title="i + 1"
      :answer="quest.answer"
      v-for="(quest, i) in quests"></Quiz>
  </div>
</template>
<script>
import Quiz from '../components/quest.vue'
import { quests } from '@/shared/quiz'
export default {
  components: {
    Quiz
  },
  data () {
    return {
      quests
    }
  }
}
</script>
<style lang="stylus" scoped>
h1
  text-align center
  width 100%
</style>
