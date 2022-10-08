import { createStore } from 'vuex';

const counterModule = {
    state() {
        return {
            counter: 0,
        };
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 2;
        },
        increase(state, payload) {
            console.log(state);
            state.counter = state.counter + payload.value;
        },
    },
    actions: {
        increment(context) { // Yes I can use the same name.
            setTimeout(function () {
                context.commit('increment');
            }, 2000);
        },
        increase(context, payload) {
            context.commit('increase', payload);
        },
    },
    getters: {}
};

const store = createStore({
    modules: {
        numbers: counterModule  
    },
    state() {
        return {
            isLoggedIn: false
        };
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }
    },
    actions: {
        login(context) {
            context.commit('setAuth', { isAuth: true });
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false });
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter * 3;
        },
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter;
            if (finalCounter < 0) {
                return 0;
            }
            if (finalCounter > 100) {
                return 100;
            }
            return finalCounter;
        },
    }
});

export default store;