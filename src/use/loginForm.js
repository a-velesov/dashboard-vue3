import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";

export function useLoginForm() {
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
            .email('Некорректный email'),
    );

    const {
        value: password,
        errorMessage: pError,
        handleBlur: pBlur,
    } = useField('password',
        yup
            .string()
            .trim()
            .required('Введите пароль')
            .min(6, 'Пароль должен быть не менее 6 символов'),
    );

    const isTooManyAttemps = computed(() => submitCount.value >= 3);

    let title = 'Хватит жать';

    watch(isTooManyAttemps, value => {

        if(value) {
            setTimeout(() => {
                submitCount.value = 0;
                // title = 'Так и быть, нажми еще';
            }, 2500);
        }
    });

    const onSubmit = handleSubmit(values => {
        console.log(values, 'values');
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