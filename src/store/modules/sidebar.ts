export default {
    namespaced: true,
    state: {
        sidebar: false,
    },
    getters: {
        getSidebar(state: any) {
            return state.sidebar;
        }
    },
    mutations: {
        openSidebar(state: any) {
            state.sidebar = true;
        },
        closeSidebar(state: any) {
            state.sidebar = false;
        },
    },
    actions: {},
}