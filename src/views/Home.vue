<template>
  <app-loader v-if="loading" />
  <app-page title="Список заявок" v-else>
    <template #header>
      <span
        class="create"
        @click="modal = true"
      >+</span>
    </template>

    <request-table :requests="requests" />

    <teleport to="body">
      <app-modal v-if="modal" title="Создать заявку" @close="modal = false">
        <request-modal @created="modal = false"></request-modal>
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import AppPage from '@/components/ui/AppPage.vue';
import RequestTable from '@/components/request/RequestTable.vue';
import AppModal from '@/components/ui/AppModal.vue';
import RequestModal from '@/components/request/RequestModal.vue';
import AppLoader from '@/components/ui/AppLoader.vue';

export default {
  name: 'Home',
  components: {
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

    onMounted(async () => {
      loading.value = true;
      await store.dispatch('request/load');
      loading.value = false;
    });

    const requests = computed(() => store.getters['request/requests']);

    return {
      modal,
      requests,
      loading,
    };
  },
};
</script>
<style scoped>
.create {
  color: #42b983;
  cursor: pointer;
}
</style>
