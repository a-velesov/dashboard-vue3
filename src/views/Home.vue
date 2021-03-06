<template>
  <app-page title="Список заявок">
    <template #header>
      <button class="btn primary">Создать</button>
    </template>
  </app-page>
</template>

<script>
import AppPage from '@/components/ui/AppPage.vue';

export default {
  name: 'Home',
  components: { AppPage },
};
</script>
