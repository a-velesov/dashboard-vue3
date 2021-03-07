<template>
  <app-page title="Список заявок">
    <template #header>
      <button
        class="btn primary"
        @click="modal = true"
      >Создать</button>
    </template>

    <request-table :requests="[]">
    </request-table>

    <teleport to="body">
      <app-modal v-if="modal" title="Создать заявку" @close="modal = false"></app-modal>
    </teleport>
  </app-page>
</template>

<script>
import { ref } from 'vue';
import AppPage from '@/components/ui/AppPage.vue';
import RequestTable from '@/components/request/RequestTable.vue';
import AppModal from '@/components/ui/AppModal.vue';

export default {
  name: 'Home',
  components: { AppModal, RequestTable, AppPage },
  setup() {
    const modal = ref(false);

    return {
      modal,
    };
  },
};
</script>
