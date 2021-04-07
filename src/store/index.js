import Vue from "vue";
import Vuex from "vuex";
import shop from "@/api/shop";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // = data
    products: []
  },
  getters: {
    // = computed properties
    productsCount() {},
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0);
    }
  },
  actions: {
    // = methods
    fetchProducts({commit}) {
      //make the call
      // run setProducts mutation
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
            //this.products = products
            commit("setProducts", products);
            resolve();
          });
      })
      
    },
    // actions control when the mutations are fired
    // addToCart(context, product) {
    //     if(product.inventory > 0)
    //     context.commit("pushProductToCart", product)
    // }
  },
  mutations: {
    setProducts(state, products) {
      //updated products
      state.products = products;
    }
  }
});
