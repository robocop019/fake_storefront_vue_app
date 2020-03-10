<template>
  <div class="home">

    <h1>All Products</h1>
    <div v-for="product in products">
      <h3><router-link :to="'/products/' + product.id"> {{ product.name }} </router-link></h3>
      <img v-bind:src="product.image_url" v-bind:alt="product.name">
    </div>

  </div>
</template>

<style>
  img {
    max-height: 25%;
    max-width: 25%;
  }

  button {
    margin: 10px;
  }
</style>

<script>
  var axios = require('axios');

  export default {
    data: function() {
      return {
        products: []
      };
    },
    created: function() {
      axios.get('/api/products').then(response => {
        this.products = response.data;
      });
    },
    methods: {}
  };
</script>
