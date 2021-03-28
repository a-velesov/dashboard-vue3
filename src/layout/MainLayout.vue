<template>
  <div>
  <the-navbar />
    <the-sidebar />
  <div class="container with-nav">
    <app-message />
    <router-view />
  </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';
import AppMessage from '@/components/ui/AppMessage.vue';
import TheSidebar from '@/components/TheSidebar.vue';

export default {
  name: 'MainLayout',
  components: { TheSidebar, AppMessage, TheNavbar },
  methods: {},
};
</script>

<style scoped>

</style>
