<template>
  <app-loader v-if="loading" />
  <app-page back title="Заявка" v-else-if="request">
    <p><strong>Имя владельца</strong>: {{request.fio}}</p>
    <p><strong>Телефон</strong>: {{request.phone}}</p>
    <p><strong>Сумма</strong>: {{currency(request.amount)}}</p>
    <p><strong>Статус</strong>: <app-status :type="request.status" /></p>
    <div class="form-control">
      <label for="status">Статус</label>
      <select id="status" v-model="status">
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>
    <button class="btn" @click="update" v-if="hasChanges">Обновить</button>
    <button class="btn danger" @click="remove">Удалить</button>
  </app-page>
  <h3 v-else class="text-center text-white"> Заявки {{ $route.params.id }} нет</h3>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted, ref } from 'vue';
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
    const status = ref();
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    onMounted(async () => {
      loading.value = true;
      request.value = await store.dispatch('request/loadById', route.params.id);
      status.value = request.value?.status;
      loading.value = false;
    });

    const hasChanges = computed(() => request.value.status !== status.value);

    const remove = async () => {
      await store.dispatch('request/remove', route.params.id);
      router.push('/');
    };

    const update = async () => {
      const data = { ...request.value, id: route.params.id, status: status.value };
      await store.dispatch('request/update', data);
      request.value.status = status.value;
    };

    return {
      request,
      loading,
      currency,
      remove,
      update,
      status,
      hasChanges,
    };
  },
};
</script>

<style scoped>

</style>
