<template>
  <app-page back title="Помощь">
    <question-item
      v-for="question in questions"
      :key="question.title"
      :question="question"
    />
  </app-page>
</template>

<script>
import AppPage from '@/components/ui/AppPage.vue';
import QuestionItem from '@/components/question/QuestionItem.vue';

export default {
  components: { QuestionItem, AppPage },
  setup() {
    const questions = [
      { title: 'Что есть в данной системе?', text: 'Тут есть все, для того, чтобы смотреть, какие заявки человек добавлял' },
      { title: 'Как тут работает авторизация?', text: 'Все реализовано через Firebase' },
    ];

    return { questions };
  },
};
</script>
