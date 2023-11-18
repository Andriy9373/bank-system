<template>
    <div>
        <div class="modal-backdrop" @click="$emit('close')"></div>
        <div class="modal">
            <h3>{{ title }}</h3>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
  
export default defineComponent({
    name: 'app-modal',
    props: {
        title: {
            type: String,
            default: '',
        }
    }
});
</script>
