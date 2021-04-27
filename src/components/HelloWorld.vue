<template>
  <div class="quiz-ctn">
    <h1>What is the console?</h1>
    <div class="wrap">
      <Quiz
        :quiz="quest.quiz"
        :key="i"
        :title="i + 1"
        :answer="quest.answer"
        v-for="(quest, i) in quests"
      ></Quiz>
      <h2 style="text-align: center; margin-top: 50px">Loop and array</h2>
      <Quiz
        :quiz="quest.quiz"
        :key="i"
        :title="i + 1"
        :answer="quest.answer"
        v-for="(quest, i) in quests3"
      ></Quiz>
      <Quiz
        type="php"
        :hasInput="false"
        :title="'實作'"
        :answer="[]"
        :quiz="phpQuiz"
      >
        <pre>
And I put it at
<a href="https://paullee.dev.taipei/laragirl/api.php">https://paullee.dev.taipei/laragirl/api.php</a>
Hope you can get all the echo string!
        </pre>
      </Quiz>
    </div>
  </div>
</template>
<script>
import Quiz from '../components/quest.vue'
import { quests, phpQuiz } from '@/shared/quiz'
import { quests3 } from '@/shared/quiz2'
export default {
  components: {
    Quiz,
  },
  data() {
    return {
      quests,
      phpQuiz,
      quests3
    }
  },
}
</script>
<style lang="stylus" scoped>
h1
  text-align center
  width 100%
.quiz-ctn
  padding-bottom 100px
// .wrap
//   padding 0 10rem
//   display flex
//   flex-wrap wrap
//   > *
//     flex-shrink 0
</style>
