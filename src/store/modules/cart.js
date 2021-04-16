import shop from "@/api/shop";
export default {
  namespaced:true,
  state: {
    itens: [],
    checkoutStatus: null
  },
  getters: {
    cartProducts(state, getters, rootState, rootGetters) {
      return state.itens.map(cartItem => {
        const product = rootState.products.itens.find(
          product => product.id === cartItem.id
        );
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        };
      });
    },

    cartTotal(state, getters) {
      return getters.cartProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    }
  },
  actions: {
    checkout({ state, commit }) {
        shop.buyProducts(
          state.itens,
          () => {
            commit("emptyCart");
            commit("setCheckoutStatus", "sucess");
          },
          () => {
            commit("setCheckoutStatus", "failure");
          }
        );
      }
  },
  mutations: {
    pushProductToCart(state, productId) {
      state.itens.push({
        id: productId,
        quantity: 1
      });
    },
    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++;
    },
    setCheckoutStatus(state, status) {
      state.checkoutStatus = status;
    },
    emptyCart(state) {
      state.itens = [];
    },
    spliceProductFromCart(state, index) {
      state.itens.splice(index, 1);
    }
  }
};
