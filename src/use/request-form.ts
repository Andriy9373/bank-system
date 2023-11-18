import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

export function useRequestForm(func: any) {
    const { handleSubmit, isSubmitting } = useForm({
        initialValues: { status: 'active' }
    });

    const {
        value: fullName,
        errorMessage: fullNameError,
        handleBlur: fullNameBlur
    } = useField('fullName', yup.string().trim().required('fullName is required'));
    const {
        value: phone,
        errorMessage: phoneError,
        handleBlur: phoneBlur
    } = useField('phone', yup.string().trim().required('phone is required'));
    const {
        value: amount,
        errorMessage: amountError,
        handleBlur: amountBlur
    } = useField('amount',
        yup.number()
        .min(0, 'amount must be more then 0')
        .required('amount is required')
    );
    const {
        value: status,
        errorMessage: statusError,
        handleBlur: statusBlur
    } = useField('status', yup.string().required('status is required'));

    const onSubmit = handleSubmit(func as any);

    return {
        fullName,
        fullNameError,
        fullNameBlur,

        phone,
        phoneError,
        phoneBlur,

        amount,
        amountError,
        amountBlur,

        status,
        statusError,
        statusBlur,

        onSubmit,
        isSubmitting,

    }
}