import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

new Vuex.Store({
    state: { // = data
        products: []
    },
    getters: { // = computed properties
        productsCount() {

        }
    },
    actions: { // = methods
        fetchProductions() {
        }
    },
    mutations: {
        setProducts() {
        }
    }
})