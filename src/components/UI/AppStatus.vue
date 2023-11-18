<template>
    <span :class="['badge', className]">{{ text }}</span>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
  
export default defineComponent({
    name: 'app-status',
    props: {
        type: {
            type: String,
            required: true,
            validator(value: string) {
                return ['active', 'cancelled', 'done', 'pending'].includes(value);
            }
        },
    },
    setup(props: any) {

        const classesMap: any = {
            active: 'primary',
            cancelled: 'danger',
            done: 'primary',
            pending: 'warning',
        };

        const textMap: any = {
            active: 'Active',
            cancelled: 'Cancelled',
            done: 'Done',
            pending: 'Pending',
        };

        const className = ref(classesMap[props.type]);
        const text = ref(textMap[props.type]);

        watch(props, value => {
            className.value = classesMap[value.type];
            text.value = textMap[value.type];
        })

        return { 
            className,
            text,
        }
    }
});
</script>
  