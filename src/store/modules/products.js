import shop from "@/api/shop";
export default {
  namespaced:true,
  state: {
    itens: []
  },
  getters: {
    // = computed properties
    productsCount() {},
    availableProducts(state, getters) {
      return state.itens.filter(product => product.inventory > 0);
    },

    productIsInStock() {
      //para passar argumentos para um getter
      // da pra usar uma função como retorno
      return product => {
        return product.inventory > 0;
      };
    }
  },
  actions: {
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
  },
  mutations: {
    setProducts(state, products) {
      //updated products
      state.itens = products;
    },

    decrementProductInventory(state, product) {
      product.inventory--;
    },

    incrementProductInventory(state, {product, quantity}) {
      product.inventory+= quantity;
    }
  }
};
