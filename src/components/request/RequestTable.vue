<template>
    <div>
        <h4 v-if="requests.length === 0" class="text-center">No requests yet</h4>
        <table v-else class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Full name</th>
                    <th>Phone</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in requests" :key="item.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.fullName }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ currency(item.amount) }}</td>
                    <td><app-status :type="item.status"/></td>
                    <td>
                        <router-link
                            v-slot="{navigate}"
                            :to="{name: 'request', params: {id: item.id}}"
                            custom
                        >
                            <button class="btn" @click="navigate">Open</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { currency } from '@/utils/currency';
import AppStatus from '@/components/UI/AppStatus.vue';
  
export default defineComponent({
    name: 'request-table',
    props: ['requests'],
    components: { AppStatus },
    setup() {
        return { currency }
    }
});
</script>
  