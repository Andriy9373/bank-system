<template>
    <component v-if="layout" :is="`${layout}-layout`" />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from '@/layout/MainLayout.vue';
import AuthLayout from '@/layout/AuthLayout.vue';
  
export default defineComponent({
    components: { MainLayout, AuthLayout },
    setup() {
        const route = useRoute();
        const layout = computed(() => route.meta.layout);

        return { layout };
    }
});
</script>