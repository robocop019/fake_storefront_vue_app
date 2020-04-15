<template>
  <div class="products-index">
    <div class="container">

      <h1>All Products</h1>

      <div class="row">

        <div v-for="product in orderBy(filterBy(products, $parent.nameFilter, 'name'), sortAttribute)">

          <div class="col-md-4 offset-2">
            <div class="card text-white bg-dark mb-5">
              <img v-if='product.images[0]' :src="product.images[0].url" :alt="product.name" class="card-img-top">
              <div class="card-body">
                <h3 class="card-text"><router-link :to="'/products/' + product.id"> {{ product.name }} </router-link></h3>
              </div>
            </div>
          </div>

        </div> <!-- end v-for products -->

      </div> <!-- end .row -->
    </div> <!-- end .container -->
  </div> <!-- end .home -->
</template>

<style>
  
</style>

<script>
  import Vue2Filters from 'vue2-filters';
  var axios = require('axios');

  export default {
    data: function() {
      return {
        products: [],
        sortAttribute: 'name'
      };
    },
    created: function() {
      axios.get('/api/products').then(response => {
        this.products = response.data;
      });
    },
    methods: {},
    mixins: [Vue2Filters.mixin]
  };
</script>
