<template>
    <app-loader v-if="loading" />
    <app-page v-else-if="request" title="Request" back>
        <p><strong>Name</strong>: {{ request.fullName }}</p>
        <p><strong>Phone</strong>: {{ request.phone }}</p>
        <p><strong>Amount</strong>: {{ currency(request.amount) }}</p>
        <p><strong>Status</strong>: <app-status :type="request.status"/></p>

        <div class="form-control">
            <label for="status">Status</label>
            <select name="status" v-model="status">
                <option value="done">Done</option>
                <option value="cancelled">Cancelled</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
            </select>
        </div>

        <button class="btn danger" @click.prevent="deleteRequest">Delete</button>
        <button v-if="isStatusChanged" class="btn" @click.prevent="updateRequest">Update</button>
    </app-page>
    <h3 v-else class="text-center texe-white">
        No requests with ID {{ $route.params.id }}
    </h3>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { currency } from '@/utils/currency';
import AppPage from '@/components/UI/AppPage.vue';
import AppLoader from '@/components/UI/AppLoader.vue';
import AppStatus from '@/components/UI/AppStatus.vue';
  
export default defineComponent({
    name: 'request-view',
    components: { AppPage, AppLoader, AppStatus },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const store = useStore();
        const request = ref();
        const loading = ref(false);
        const status = ref();

        const isStatusChanged = computed(() => status.value !== request.value.status);

        const deleteRequest = async () => {
            await store.dispatch('request/deleteById', route.params.id);
            router.push({name: 'home'});
        }

        const updateRequest = async () => {
            await store.dispatch('request/update', {...request.value, status: status.value, id: route.params.id});
            request.value.status = status.value;
        }

        onMounted(async () => {
            loading.value = true;
            request.value = await store.dispatch('request/loadById', route.params.id);
            status.value = request.value.status;
            loading.value = false;
        })

        return {
            loading, 
            request,
            currency,
            status,
            isStatusChanged,
            deleteRequest,
            updateRequest,
        };
    }
});
</script>
  