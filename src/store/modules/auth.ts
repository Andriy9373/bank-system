import axios from "axios";
import store from "@/store";
import { error } from "@/utils/error";
const TOKEN_KEY = 'jwt-token';

export default {
    namespaced: true,
    state: {
        token: localStorage.getItem(TOKEN_KEY),
        email: 'test@test.com',
        password: 'test123',
    },
    getters: {
        email(state: any) {
            return state.email;
        },
        password(state: any) {
            return state.password;
        },
        token(state: any) {
            return state.token;
        },
        isAuthenticated(state: any) {
            return !!state.token;
        }
    },
    mutations: {
        setToken(state: any, payload: any) {
            state.token = payload;
            localStorage.setItem(TOKEN_KEY, state.token);
        },
        logout(state: any) {
            state.token = null;
            localStorage.removeItem(TOKEN_KEY);
        }
    },
    actions: {
        async login({ commit }: any, payload: any) {
            try {                
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`;
                const { data } = await axios.post(url, payload);
                commit('setToken', data.idToken);
                store.commit('message/clearMessage');
            } catch (e: any) {
                store.dispatch('message/setMessage', {
                    value: error(e.response.data.error.message),
                    type: 'danger',
                });
                throw new Error(e);
            }
        }

    },
}