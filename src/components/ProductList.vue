<template>
  <div>
    <h1>Product List</h1>
    <h1 v-if="loading">LOADING...</h1>
    <div v-else class="columns is-multiline is-mobile">
      <div
        class="column is-4 card"
        v-for="product in products"
        :key="product.id"
      >
        <header class="card-header">
          <p class="card-header-title">
            {{ product.title }}
          </p>
        </header>

        <footer class="card-footer">
          <p class="card-footer-item">{{ product.price | currency }}</p>
          <p class="card-footer-item">{{ product.inventory }}</p>
        </footer>
        <footer class="card-footer">
          <button
            class="button is-primary card-footer-item"
            :disabled="!productIsInStock(product)"
            @click="addProductToCart(product)"
          >
            Add to cart
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      loading: false,
      productIndex: 1,
    };
  },
  computed: {
    ...mapState({
      products: (state) => state.products.itens,
      firstProduct: (state) => state.products.itens[0],
      specificProduct(state) {
        return state.products.itens[productIndex];
      },
    }),
    ...mapGetters("products", {
      productIsInStock: "productIsInStock",
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: "products/fetchProducts",
      addProductToCart: "addProductToCart",
    }),
  },
  created() {
    this.loading = true;
    this.fetchProducts().then(() => (this.loading = false));
  },
};
</script>

<style>
</style>