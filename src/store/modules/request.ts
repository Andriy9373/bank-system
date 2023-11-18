import axios from "axios";
import router from "@/router";
import store from "@/store";

export default {
    namespaced: true,
    state: {
        requests: [],
    },
    getters: {
        requests(state: any) {
            return state.requests;
        }
    },
    mutations: {
        setRequests(state: any, payload: any) {
            state.requests = payload;
        },
        addRequest(state: any, payload: any) {
            state.requests.push(payload);
        }
    },
    actions: {
        async create({ commit }: any, payload: any) {
            try {
                const url = process.env.VUE_APP_FB_URL;
                const token = store.getters['auth/token'];
                const { data } = await axios.post(`${url}/requests.json?auth=${token}`, payload)
                store.commit('request/addRequest', {...payload, id: data.name})
                store.dispatch('message/setMessage', {
                    value: 'User was successfully created!',
                    type: 'primary',
                });
            } catch (e: any) {
                store.dispatch('message/setMessage', {
                    value: e.message,
                    type: 'danger',
                });
                if (e.response.status === 401) {
                    router.push({name: 'auth'});
                }
            }
        },
        async load() {
            try {
                const url = process.env.VUE_APP_FB_URL;
                const token = store.getters['auth/token'];
                const { data } = await axios.get(`${url}/requests.json?auth=${token}`);
                const request = Object.keys(data).map(id => ({ ...data[id], id }));
                store.commit('request/setRequests', request);
            } catch (e: any) {
                store.dispatch('message/setMessage', {
                    value: e.message,
                    type: 'danger',
                });
            }
        },
        async loadById({ commit }: any, id: any): Promise<any> {
            try {
                const url = process.env.VUE_APP_FB_URL;
                const token = store.getters['auth/token'];
                const { data } = await axios.get(`${url}/requests/${id}.json?auth=${token}`);
                return data;
            } catch (e: any) {
                store.dispatch('message/setMessage', {
                    value: e.message,
                    type: 'danger',
                });
            }
        },
        async deleteById({ commit }: any, id: any): Promise<any> {
            try {
                const url = process.env.VUE_APP_FB_URL;
                const token = store.getters['auth/token'];
                await axios.delete(`${url}/requests/${id}.json?auth=${token}`);
                store.dispatch('message/setMessage', {
                    value: 'User was successfully deleted!',
                    type: 'primary',
                });
            } catch (e: any) {
                store.dispatch('message/setMessage', {
                    value: e.message,
                    type: 'danger',
                });
            }
        },
        async update({ commit }: any, payload: any): Promise<any> {
            try {
                const url = process.env.VUE_APP_FB_URL;
                const token = store.getters['auth/token'];
                await axios.put(`${url}/requests/${payload.id}.json?auth=${token}`, payload);
                store.dispatch('message/setMessage', {
                    value: 'User was successfully updated!',
                    type: 'primary',
                });
            } catch (e: any) {
                store.dispatch('message/setMessage', {
                    value: e.message,
                    type: 'danger',
                });
            }
        },
    },
}