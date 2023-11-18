<template>
    <form @submit.prevent="onSubmit">
        <div :class="['form-control', {invalid: fullNameError}]">
            <label for="first">Full name</label>
            <input name="fullName" type="text" v-model="fullName" @blur="fullNameBlur"/>
            <small v-if="fullNameError">{{ fullNameError }}</small>
        </div>

        <div :class="['form-control', {invalid: phoneError}]">
            <label for="phone">Phone</label>
            <input name="phone" type="text" v-model="phone" @blur="phoneBlur"/>
            <small v-if="phoneError">{{ phoneError }}</small>
        </div>

        <div :class="['form-control', {invalid: amountError}]">
            <label for="amount">Amount</label>
            <input name="amount" type="number" v-model="amount"  @blur="amountBlur"/>
            <small v-if="amountError">{{ amountError }}</small>
        </div>

        <div :class="['form-control', {invalid: statusError}]">
            <label for="status">Status</label>
            <select name="status" v-model="status" @blur="statusBlur">
                <option value="done">Done</option>
                <option value="cancelled">Cancelled</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
            </select>
            <small v-if="statusError">{{ statusError }}</small>
        </div>

        <button class="btn primary" type="submit" :disabled="isSubmitting">Submit</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRequestForm } from '@/use/request-form';
import { useStore } from 'vuex';
  
export default defineComponent({
    name: 'request-modal',
    setup(_, {emit}) {

        const store = useStore();

        const submit = (values: any) => {
            store.dispatch('request/create', values);
            emit('created');
        }

        return useRequestForm(submit);
    }
});
</script>
  