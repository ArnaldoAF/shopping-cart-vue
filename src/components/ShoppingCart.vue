<template>
  <div>
    <h1 class="title is-2 box">Shopping Cart</h1>
    <table class="table is-fullwidth is-narrow" id="cart-box">
      <tfoot>
        <tr>
          <th></th>
          <th></th>
          <th class="has-text-right">Total: {{ total | currency }}</th>
        </tr>
      </tfoot>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td class="has-text-left">{{ product.quantity }}</td>
          <td class="has-text-left">{{ product.title }}</td>
          <td class="has-text-right">{{ product.price | currency }}</td>
        </tr>
      </tbody>
    </table>
    

    <button class="button is-info is-fullwidth" @click="checkout">CHECKOUT</button>
    <div 
      v-if="checkoutStatus" 
      class="notification is-light" 
      :class="{'is-light':checkoutStatus=='success', 'is-danger':checkoutStatus=='failure' }">
      <strong>
      {{ checkoutStatus }}
      </strong>
    </div>
  </div>
</template>
 
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("cart", ["checkout"]),
  },
  computed: {
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotal",
    }),
    ...mapState("cart", {
      checkoutStatus: (state) => state.checkoutStatus,
    }),
  },
};
</script>

<style>

</style>