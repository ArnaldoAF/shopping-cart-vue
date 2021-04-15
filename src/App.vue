<template>
  <div id="app">
    <div class="columns is-variable is-5">
      <div class="column block is-8 " id="listComponent">
        <ProductList />
      </div>
      <div class="column block is-4 box ml-5" id="cart-component">
      <ShoppingCart />
      </div>
    </div>

  </div>
</template>

<script>
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart';
export default {
  

  name: 'app',
  components: {
    ProductList,
    ShoppingCart

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3rem;
}

#listComponent {
      overflow-y: scroll;
    max-height: 90vh;
}

#cart-component {
  height: 100%;
}

</style>
