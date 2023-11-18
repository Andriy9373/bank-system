<template>
    <nav class="navbar">
        <h3>Bank System</h3>
        <ul class="navbar-menu">
            <li style="display: flex; gap: 30px;">
                <router-link :to="{name: 'home'}">
                    Requests
                </router-link>
                <router-link :to="{name: 'help'}">
                    Help
                </router-link>
                <a href="#" @click.prevent="open">
                    Message
                </a>
                <a href="#" @click.prevent="logout">
                    Exit
                </a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
  
export default defineComponent({
    setup() {
        const router = useRouter();
        const store = useStore();

        const logout = () => {
            store.commit('auth/logout');
            router.push({name: 'auth'});
        }

        return {
            logout,
            open: () => store.commit('sidebar/openSidebar'),
        };
    }
});
</script>
  