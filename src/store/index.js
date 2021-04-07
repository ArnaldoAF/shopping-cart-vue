import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // = data
    products: []
  },
  getters: {
    // = computed properties
    productsCount() {
      
    },
    availableProducts(state, getters) {
        return state.products.filter(product => product.inventory > 0);
    }
  },
  actions: {
    // = methods
    fetchProductions() {
      //make the call
      // runb setProducts mutation
    }
  },
  mutations: {
    setProducts(state, products) {
      //updated products
      state.products = products;
    }
  }
});
