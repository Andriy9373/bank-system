<template>
    <div v-if="sidebar" @click="close" class="sidebar-container"></div>
    <transition name="slide-fade">
            <div v-if="sidebar" class="sidebar-content">
                <span class="sidebar-close" @click.prevent="close">&times;</span>

                <div>
                    <p class="mb-15px">Bank systems, also known as banking platforms or core banking systems, represent the backbone of a bank's operations, enabling them to manage customer data, execute transactions, and maintain financial products. With the rise of the digital era, the complexities and expectations of these systems have evolved, necessitating innovations in technology, security, and user experience.</p>
                    <p class="mb-15px">The future holds exciting prospects for banking platforms. With advancements in artificial intelligence, machine learning, and big data analytics, banks will be able to offer personalized services, predicting customer needs and offering tailored financial products. Additionally, the rise of decentralized finance (DeFi) and blockchain will potentially reshape the banking industry, with bank systems at the forefront of this transformation.</p>
                    <p>Bank systems are integral to the operations of modern financial institutions.</p>
                </div>
            </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
  
export default defineComponent({
    setup() {
        const store = useStore();

        return {
            sidebar: computed(() => store.getters['sidebar/getSidebar']),
            close: () => store.commit('sidebar/closeSidebar'),
        };
    }
});
</script>