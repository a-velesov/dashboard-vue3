<template>
   <span :class="['badge', className]">
     {{ text }}
   </span>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'AppStatus',
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['active', 'cancelled', 'done', 'pending'].includes(value);
      },
    },
  },
  setup(props) {
    const classesMap = {
      active: 'primary',
      cancelled: 'danger',
      done: 'primary',
      pending: 'warning',
    };

    const textMap = {
      active: 'Активен',
      cancelled: 'Отменен',
      done: 'Завершен',
      pending: 'Выполняется',
    };

    const className = ref(classesMap[props.type]);
    const text = ref(textMap[props.type]);

    watch(props, (value) => {
      className.value = classesMap[value.type];
      text.value = textMap[value.type];
    });

    return {
      className,
      text,
    };
  },
};
</script>

<style scoped>

</style>
