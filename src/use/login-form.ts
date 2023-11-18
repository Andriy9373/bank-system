import { computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

export function useLoginForm() {
    const store = useStore();
    const router = useRouter();
    const PASSWORD_MIN_LENGTH = 6;
    const AVAILABLE_ATTEMPS = 5;
    const {handleSubmit, isSubmitting, submitCount} = useForm();

    const {
        value: email,
        errorMessage: emailError,
        handleBlur: emailBlur
    } = useField(
        'email',
        yup
            .string()
            .trim()
            .required('Email is required')
            .email('Please enter correct email')
        );
    const {
        value: password,
        errorMessage: passwordError,
        handleBlur: passwordBlur
    } = useField(
        'password',
        yup
            .string()
            .trim()
            .required('Password is required')
            .min(PASSWORD_MIN_LENGTH, `Password must contain minimum ${PASSWORD_MIN_LENGTH} letter`)
        );

    const onSubmit = handleSubmit(async values => {
        try {
            await store.dispatch('auth/login', values);
            router.push({name: 'home'});
        } catch (e) {
            return;
        }
    })

    const areTooManyAttemps = computed(() => submitCount.value > AVAILABLE_ATTEMPS);

    watch(areTooManyAttemps, value => {
        if (value) {
            setTimeout(() => {
                submitCount.value = 0;
            }, 10000)
        }
    })

    onMounted(() => {
        const emailStore = store.getters['auth/email'];
        const passwordStore = store.getters['auth/password'];

        if (emailStore) {
            email.value = emailStore;
        }

        if (passwordStore) {
            password.value = passwordStore;
        }        
    });

    return {
        email,
        emailError,
        emailBlur,
        password,
        passwordError,
        passwordBlur,
        onSubmit,
        isSubmitting,
        areTooManyAttemps,
    }
}