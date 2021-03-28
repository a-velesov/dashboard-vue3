<template>
  <app-loader v-if="loading" />
  <app-page back title="Заявка" v-else-if="request">
    <div class="requestion-field"><strong>Имя владельца</strong>: {{request.fio}}</div>
    <div class="requestion-field"><strong>Телефон</strong>: {{request.phone}}</div>
    <div class="requestion-field"><strong>Сумма</strong>: {{currency(request.amount)}}</div>
    <div class="requestion-field"><strong>Статус</strong>:
      <app-status :type="request.status" />
      <img class="edit-status" @click="updateStatus = true" src="../assets/pen.svg" alt="edit status">
    </div>
    <div v-if="updateStatus" class="form-control">
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
    const updateStatus = ref(false);
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
      updateStatus.value = false;
    };

    return {
      request,
      loading,
      currency,
      remove,
      update,
      status,
      updateStatus,
      hasChanges,
    };
  },
};
</script>

<style scoped>
.requestion-field {
  display: flex;
  align-items: center;
  margin: 15px 0;
}

</style>
