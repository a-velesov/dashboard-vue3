<template>
  <div class="card">
    <div class="card-title">
      <h2>{{ title }}</h2>
      <slot name="additional" />
    </div>
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
h2 {
  padding: 0;
  margin: 20px 0;
}

.card-title {
  border: none;
  justify-content: flex-start;
  align-items: baseline;
}

</style>
