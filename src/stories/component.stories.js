import { storiesOf } from '@storybook/vue'
import QuizBlock from '../components/quest'
import { quests } from '../shared/quiz'

storiesOf('Component', module).add('with import js', () => ({
  components: {
    QuizBlock,
  },
  data () {
    return {
      ans: ''
    }
  },
  template: `<QuizBlock :quiz="'const test'" v-model="ans"></QuizBlock>`
  ,
}))
