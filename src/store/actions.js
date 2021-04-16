import shop from "@/api/shop";

export default {
    // = methods
    
    addProductToCart({ state, getters, commit, rootState, rootGetters }, product) {
      if (rootGetters['products/productIsInStock'](product)) {
        const cartItem = rootState.cart.itens.find(item => item.id === product.id);
        if (!cartItem) {
          commit("cart/pushProductToCart", product.id);
        } else {
          commit("cart/incrementItemQuantity", cartItem);
        }

        commit("products/decrementProductInventory", product, { root:true});
      }
    },

    removeProductFromCart({state, getters, commit, rootState, rootGetters}, shoppingCartItem) {
      // find cart Item
      const cartItem = rootState.cart.itens.find(item => item.id === shoppingCartItem.id);
      const cartItemIndex = rootState.cart.itens.findIndex(item => item.id === shoppingCartItem.id);
      const product = rootState.products.itens.find(item => item.id === shoppingCartItem.id);

      commit('products/incrementProductInventory', {product, quantity: cartItem.quantity});
      commit('cart/spliceProductFromCart', cartItem);

    }
    
    // actions control when the mutations are fired
  };