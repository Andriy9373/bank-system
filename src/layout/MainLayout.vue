<template>
    <div>
        <the-navbar/>
        <the-sidebar/>
        <div class="container with-nav">
            <app-message/>
            <router-view/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNavbar from '@/components/TheNavbar.vue';
import TheSidebar from '@/components/TheSidebar.vue';
import AppMessage from '@/components/UI/AppMessage.vue';
  
export default defineComponent({
    name: 'main-layout',
    components: { TheNavbar, AppMessage, TheSidebar },
});
</script>
  