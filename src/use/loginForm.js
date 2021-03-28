import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { computed, watch, onMounted } from 'vue';
import { useStore } from 'vuex';
import router from '@/router';

export default function useLoginForm() {
  const {
    handleSubmit,
    isSubmitting,
    submitCount,
  } = useForm();

  const {
    value: email,
    errorMessage: eError,
    handleBlur: eBlur,
  } = useField('email',
    yup
      .string()
      .trim()
      .required('Введите email')
      .email('Некорректный email'));

  const {
    value: password,
    errorMessage: pError,
    handleBlur: pBlur,
  } = useField('password',
    yup
      .string()
      .trim()
      .required('Введите пароль')
      .min(6, 'Пароль должен быть не менее 6 символов'));

  const isTooManyAttemps = computed(() => submitCount.value >= 3);

  const title = 'Хватит жать';

  onMounted(() => {
    email.value = 'admin@gmail.com';
    password.value = '123456';
  });

  watch(isTooManyAttemps, (value) => {
    if (value) {
      setTimeout(() => {
        submitCount.value = 0;
        // title = 'Так и быть, нажми еще';
      }, 2500);
    }
  });

  const store = useStore();

  const onSubmit = handleSubmit(async (values) => {
    try {
      await store.dispatch('auth/login', values);
      router.push('/');
    } catch (e) {
      console.log(e);
    }
  });

  return {
    email,
    eError,
    eBlur,
    password,
    pError,
    pBlur,
    onSubmit,
    isSubmitting,
    isTooManyAttemps,
    title,
  };
}
