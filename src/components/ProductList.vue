<template>
  <div>
    <h1>Product List</h1>
    <h1 v-if="loading">LOADING...</h1>
    <ul v-else>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} -
        {{ product.inventory }}
        <button
          :disabled="!productIsInStock(product)"
          @click="addProductToCart(product)"
        >
          Add to cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex';
export default {
    data() {
        return {
            loading: false,
            productIndex: 1
        }
    },
    computed: {
        ...mapState({
            products: state => state.products,
            firstProduct: state => state.products[0],
            specificProduct (state) {
                return state.products[productIndex]
            }
        }),
        ...mapGetters({
            productIsInStock: 'productIsInStock'
        })
    },
    methods: {
        ...mapActions({
            fetchProducts: 'fetchProducts',
            addProductToCart: 'addProductToCart'
        }),
        
    },
    created() {
        this.loading = true;
        this.fetchProducts().then(() => this.loading = false)
    }
}
</script>

<style>
</style>