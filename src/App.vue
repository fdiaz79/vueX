<template>
  <div id="app">
    <product-list-one v-bind:products="products" ></product-list-one>
    <product-list-two v-bind:products="products" ></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';
export default {
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  },
  name: 'app',
  data () {
    return {
      products: [
        {id: 1, name: 'Banana Skin', price: 20},
        {id: 2, name: 'Shiny Star', price: 40},
        {id: 3, name: 'Green Shells', price: 60},
        {id: 4, name: 'Red Shells', price: 40}
      ]
    }
  }
  
}
</script>

<style>
  body{
    font-family: Ubuntu;
    color: #555;
  }

</style>
