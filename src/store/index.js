import Vue from "vue";
import Vuex from "vuex";
import shop from "@/api/shop";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // = data
    products: [],
    cart: []
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
    fetchProducts({ commit }) {
      //make the call
      // run setProducts mutation
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          //this.products = products
          commit("setProducts", products);
          resolve();
        });
      });
    },
    addProductToCart(context, product) {
      if (product.inventory > 0) {
          const cartItem = context.state.cart.find(item => item.id === product.id);
        if (!cartItem) {
          context.commit('pushProductToCart', product.id);
        } else {
          context.commit('incrementItemQuantity', cartItem);
        }

        context.commit('decrementProductInventory', product);
      }
    }
    // actions control when the mutations are fired

  },
  mutations: {
    setProducts(state, products) {
      //updated products
      state.products = products;
    },
    pushProductToCart(state, productId) {
        state.cart.push({
            id: productId,
            quantity: 1
        })
    },
    incrementItemQuantity(state, cartItem) {
        cartItem.quantity++;
    },
    decrementProductInventory(state, cartItem) {
        cartItem.quantity--;
    }
  }
});
