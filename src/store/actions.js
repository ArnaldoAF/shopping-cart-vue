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
    }
    
    // actions control when the mutations are fired
  };