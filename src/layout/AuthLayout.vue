<template>
  <div class="container">
    <router-view />
    <app-message />
  </div>
</template>

<script>
import AppMessage from '@/components/ui/AppMessage.vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import error from '@/utils/error';

export default {
  name: 'AuthLayout',
  components: { AppMessage },
  setup() {
    const route = useRoute();
    const store = useStore();

    if (route.query.message) {
      store.dispatch('setMessage', {
        value: error(route.query.message),
        type: 'warning',
      });
    }
  },
};
</script>

<style scoped>

</style>
