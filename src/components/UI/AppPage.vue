<template>
    <div v-if="back" class="breadcrumbs">
        <router-link :to="{name: 'home'}" class="text-white">
            Back to requests
        </router-link>
    </div>
    <div class="card">
        <h1 class="card-title">
            {{ title }}
            <slot name="header"></slot>
        </h1>
        <slot></slot>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
  
export default defineComponent({
    props: {
        title: {
            type: String,
            default: '',
        },
        back: {
            type: Boolean,
            default: false,
        }
    },
    setup(props) {
        document.title = JSON.parse(JSON.stringify(props.title));
    }
});
</script>
