<template>
    <div class="filter">
        <div class="form-control">
            <input type="text" placeholder="Enter name" v-model="name"/>
        </div>
        <div class="form-control">
            <select v-model="status">
                <option disabled selected>Select status</option>
                <option value="done">Done</option>
                <option value="cancelled">Cancelled</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
            </select>
        </div>
        <button v-if="isActive" class="btn warning" @click.prevent="clearFilter">Clear</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue';
  
export default defineComponent({
    name: 'request-filter',
    props: ['modelValue'],
    setup(_, {emit}) {
        const name = ref();
        const status = ref();

        watch([name, status], values => {
            emit('update:modelValue', {
                name: values[0],
                status: values[1]
            })
        })

        const clearFilter = () => {
            name.value = null,
            status.value = null;
        }

        return {
            name,
            status,
            clearFilter,
            isActive: computed(() => name.value || status.value ? true : false),
        }
    }
});
</script>
  