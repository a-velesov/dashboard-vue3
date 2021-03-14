<template>
  <app-loader v-if="loading" />
  <app-page title="Список заявок" v-else>
    <template #additional>
      <span
        class="create"
        @click="modal = true"
      >+</span>
    </template>

    <request-filter v-model="filter" />
    <request-table :requests="requests" />

    <teleport to="body">
      <app-modal v-if="modal" title="Создать заявку" @close="modal = false">
        <request-modal @created="modal = false"></request-modal>
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import {
  computed, ref, onMounted,
} from 'vue';
import { useStore } from 'vuex';
import AppPage from '@/components/ui/AppPage.vue';
import RequestTable from '@/components/request/RequestTable.vue';
import AppModal from '@/components/ui/AppModal.vue';
import RequestModal from '@/components/request/RequestModal.vue';
import AppLoader from '@/components/ui/AppLoader.vue';
import RequestFilter from '@/components/request/RequestFilter.vue';

export default {
  name: 'Home',
  components: {
    RequestFilter,
    AppLoader,
    RequestModal,
    AppModal,
    RequestTable,
    AppPage,
  },
  setup() {
    const store = useStore();
    const modal = ref(false);
    const loading = ref(false);
    const filter = ref({});

    onMounted(async () => {
      loading.value = true;
      await store.dispatch('request/load');
      loading.value = false;
    });

    const requests = computed(() => store.getters['request/requests']
      .filter((request) => {
        if (filter.value.name) {
          return request.fio.toLowerCase().includes(filter.value.name.toLowerCase());
        }
        return request;
      })
      .filter((request) => {
        if (filter.value.status) {
          return request.status === filter.value.status;
        }
        return request;
      }));

    return {
      modal,
      requests,
      loading,
      filter,
    };
  },
};
</script>
<style scoped>
.create {
  color: #42b983;
  cursor: pointer;
  font-size: 35px;
  padding-left: 10px;
}
</style>
