import { createStore } from 'vuex';
import router from './src/Router';
import { BASE_URL } from './src/api/ApiConstants';

export default createStore({
    state: {
        AuthUser: null
    },
    mutations: {
        setAuthUser(state, user) {
            state.AuthUser = user;
        },
        clearAuthUser(state) {
            state.AuthUser = null;
        }
    },
    actions: {
        async checkToken({ commit }) {
            console.log(BASE_URL)
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const response = await fetch(BASE_URL+'api/show', {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    });
                    if (response.status === 200) {
                        const data = await response.json();
                        commit('setAuthUser', data);
                        router.push('/');
                    } else {
                        localStorage.removeItem('token');
                    }
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
});