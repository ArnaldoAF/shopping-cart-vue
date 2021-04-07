<template>
  <div>
      <h1>Product List</h1>
      <h1 v-if="loading">LOADING...</h1>
      <ul v-else>
          <li v-for="product in products" :key="product.id">{{product.title}} - {{product.price}}</li>
      </ul>
  </div>
</template>

<script>
import store from '@/store/index';
export default {
    data() {
        return {
            loading: false
        }
    },
    computed: {
        products() {
            return store.getters.availableProducts;
        }
    },
    created() {
        this.loading = true;
        store.dispatch('fetchProducts').then(() => this.loading = false)
    }
}
</script>

<style>

</style>