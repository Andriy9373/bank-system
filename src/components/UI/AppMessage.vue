<template>
    <div v-if="message" :class="['alert', message.type]">
        <p class="alert-title">{{ title }}</p>
        <p>{{ message.value }}</p>
        <span class="alert-close" @click.prevent="clearMessage">&times;</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
  
export default defineComponent({
    setup() {
        const TITLE_OPTIONS: any = {
            danger: 'Error!',
            primary: 'Success!',
            warning: 'Warning!',
        }

        const store = useStore();

        const message = computed(() => store.getters['message/message']);
        const title = computed(() => message.value ? TITLE_OPTIONS[message.value.type] : null);
        const clearMessage = () => store.commit('message/clearMessage');

        return {
            message,
            title,
            clearMessage,
        };
    }
});
</script>
  