<template>
    <div class="question" @click.prevent="isOpened = !isOpened">
        <div class="question-title">{{ question.title }}</div>
        <div class="question-body" v-if="isOpened">{{ question.text }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import { QuestionModel } from '@/models/QuestionModel';
  
export default defineComponent({
    name: 'question-item',
    props: {
        question: {
            type: Object as PropType<QuestionModel>,
            default: () => ({ title: '', text: '' }),
        }
    },
    setup() {
        return { isOpened: ref(false) };
    }
});
</script>