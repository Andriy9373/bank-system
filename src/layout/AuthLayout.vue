<template>
    <div class="container">
        <app-message/>
        <router-view/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppMessage from '@/components/UI/AppMessage.vue';
  
export default defineComponent({
    name: 'auth-layout',
    components: { AppMessage }
});
</script>
  