<template>
    <form class="card" @submit.prevent="onSubmit">
        <h1>Enter to system</h1>

        <div :class="['form-control', {invalid: passwordError}]">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" @blur="emailBlur"/>
            <small v-if="emailError">{{ emailError }}</small>
        </div>

        <div :class="['form-control', {invalid: passwordError}]">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" @blur="passwordBlur"/>
            <small v-if="passwordError">{{ passwordError }}</small>
        </div>

        <button class="button btn primary" type="submit" :disabled="isSubmitting || areTooManyAttemps">Sign in</button>
        <div v-if="areTooManyAttemps" class="invalid">
            You used too many attemps to enter the system. Please try later
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useLoginForm } from '@/use/login-form';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { error } from '@/utils/error';
  
export default defineComponent({
    name: 'auth-view',
    setup() {

        const route = useRoute();
        const store = useStore();

        document.title = 'Auth';

        if (route.query.message) {
            store.dispatch('message/setMessage', {
                value: error(route.query.message as any),
                type: 'warning'
            })
        }

        return useLoginForm();
    }
});
</script>