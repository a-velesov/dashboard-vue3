<template>
  <app-loader v-if="loading" />
  <app-page back title="Заявка" v-else-if="request">
    <p><strong>Имя владельца</strong>: {{request.fio}}</p>
    <p><strong>Телефон</strong>: {{request.phone}}</p>
    <p><strong>Сумма</strong>: {{currency(request.amount)}}</p>
    <p><strong>Статус</strong>: <app-status :type="request.status" /></p>
  </app-page>
  <h3 v-else class="text-center text-white"> Заявки {{ $route.params.id }} нет</h3>
</template>

<script>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import currency from '@/utils/currency';
import AppPage from '@/components/ui/AppPage.vue';
import AppLoader from '@/components/ui/AppLoader.vue';
import AppStatus from '@/components/ui/AppStatus.vue';

export default {
  name: 'Request',
  components: { AppStatus, AppLoader, AppPage },
  setup() {
    const loading = ref(true);
    const request = ref({});
    const store = useStore();
    const route = useRoute();

    onMounted(async () => {
      loading.value = true;
      request.value = await store.dispatch('request/loadById', route.params.id);
      loading.value = false;
    });

    return {
      request,
      loading,
      currency,
    };
  },
};
</script>

<style scoped>

</style>
