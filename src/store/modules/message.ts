export default {
    namespaced: true,
    state: {
        message: null,
    },
    getters: {
        message(state: any) {
          return state.message;
        }
    },
    mutations: {
        setMessage(state: any, payload: any) {
          state.message = payload;
        },
        clearMessage(state: any) {
            state.message = null;
        }
    },
    actions: {
        setMessage({ commit }: any, payload: any) {
            commit('setMessage', payload);
            setTimeout(() => {
                commit('clearMessage');
            }, 6000)
        }
    },
}