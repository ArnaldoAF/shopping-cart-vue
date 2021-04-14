import shop from "@/api/shop";

export default {
    // = methods
    
    addProductToCart({ state, getters, commit, rootState }, product) {
      if (getters.productIsInStock(product)) {
        const cartItem = rootState.cart.itens.find(item => item.id === product.id);
        if (!cartItem) {
          commit("pushProductToCart", product.id);
        } else {
          commit("incrementItemQuantity", cartItem);
        }

        commit("decrementProductInventory", product);
      }
    }
    
    // actions control when the mutations are fired
  };