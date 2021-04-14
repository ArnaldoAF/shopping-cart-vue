import Vue from "vue";
import Vuex from "vuex";
import shop from "@/api/shop";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // = data
    products: [],
    cart: [],
    checkoutStatus: null
  },
  getters: {
    // = computed properties
    productsCount() {},
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0);
    },
    cartProducts (state) {
      return state.cart.map(cartItem => {
        const product = state.products.find(product => product.id === cartItem.id);
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
    },
    cartTotal(state, getters) {
      return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
    },
    productIsInStock(){
      //para passar argumentos para um getter
      // da pra usar uma função como retorno
      return (product) => {
        return product.inventory > 0
      }
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
    addProductToCart({state, getters, commit}, product) {
      if (getters.productIsInStock(product)) {
          const cartItem = state.cart.find(item => item.id === product.id);
        if (!cartItem) {
          commit('pushProductToCart', product.id);
        } else {
          commit('incrementItemQuantity', cartItem);
        }

        commit('decrementProductInventory', product);
      }
    },
    checkout ({state, commit}) {
      shop.buyProducts(
        state.cart,
        () => {
          commit('emptyCart')
          commit('setCheckoutStatus', 'sucess')
        },
        () => {
          commit('setCheckoutStatus', 'failure')
        },
      )
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
    decrementProductInventory(state, product) {
        product.inventory--;
    },
    setCheckoutStatus(state, status) {
      state.checkoutStatus = status;
    },
    emptyCart (state) {
      state.cart = []
    }
  }
});
