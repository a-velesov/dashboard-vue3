<template>
  <div v-if="back" class="back">
    <router-link class="text-white" to="/">
      >> Вернуться к заявкам
    </router-link>
  </div>
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
    back: {
      type: Boolean,
      default: false,
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

.back {
  padding-bottom: 10px;
  padding-left: 10px;
}

</style>
