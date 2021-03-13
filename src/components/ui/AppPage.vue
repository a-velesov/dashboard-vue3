<template>
  <div class="card">
    <h2 class="card-title">
      {{ title }}
      <slot name="header" />
    </h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppPage',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
  },
  setup(props) {
    document.title = `${props.title} | Blinkoff`;
  },
};
</script>

<style scoped>
.card-title {
  margin: 0;
  border: none;
}
</style>
