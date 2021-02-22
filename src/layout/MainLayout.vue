<template>
  <div>
  <the-navbar />
  <div class="container with-nav">
    <router-view />
  </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';

export default {
  name: 'MainLayout',
  components: { TheNavbar },
  methods: {},
};
</script>

<style scoped>

</style>
