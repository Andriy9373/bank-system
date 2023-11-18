<template>
    <app-loader v-if="loading" />
    <app-page v-else title="Requests list">
        <template #header>
            <button class="btn primary" @click="modal = true">Create</button>
        </template>
        <template #default>
            <request-filter v-model="filter"/>
            <request-table :requests="requests"/>
            <teleport to="body">
                <app-modal
                    v-if="modal"
                    :title="'Create an request'"
                    @close="modal = false"
                >
                    <request-modal @created="modal = false"/>
                </app-modal>
            </teleport>
        </template>
    </app-page>
</template>
  
<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import AppLoader from '@/components/UI/AppLoader.vue';
import AppPage from '@/components/UI/AppPage.vue';
import AppModal from '@/components/UI/AppModal.vue';
import RequestTable from '@/components/request/RequestTable.vue';
import RequestModal from '@/components/request/RequestModal.vue';
import RequestFilter from '@/components/request/RequestFilter.vue';
  
export default defineComponent({
    name: 'home-view',
    components: { AppLoader, AppPage, AppModal, RequestTable, RequestModal, RequestFilter },
    setup() {
        const store = useStore();
        const modal = ref(false);
        const loading = ref(false);
        const filter = ref();

        const requests = computed(() => store.getters['request/requests']
            .filter((request: any) => {
                if (filter.value && filter.value.name) {
                    return request.fullName.includes(filter.value.name);
                }
                return request;
            })
            .filter((request: any) => {
                if (filter.value && filter.value.status) {
                    return request.status === filter.value.status;
                }
                return request;
            })
        );

        watch(filter, values => {
            filter.value = values;
        })

        onMounted(async () => {
            loading.value = true;
            await store.dispatch('request/load');
            loading.value = false;
        })
        
        return { modal, requests, loading, filter };
    }
});
</script>
  