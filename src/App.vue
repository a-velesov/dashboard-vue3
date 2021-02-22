<template>
  <component :is="layout + '-layout'" v-if="layout" />
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import MainLayout from '@/layout/MainLayout.vue';
import AuthLayout from '@/layout/AuthLayout.vue';

export default {
  setup() {
    const route = useRoute();

    return {
      layout: computed(() => route.meta.layout),
    };
  },
  components: {
    AuthLayout,
    MainLayout,
  },
};

</script>
