<template>
  <div class="products-index">
    <div class="container">

      <h1>All Products</h1>

      <div>
        <button class="btn btn-dark btn-outline-info" v-on:click="setSortAttribute('name')">
          Sort by Name <span v-if="sortAttribute === 'name'"> {{sortArrow}} </span>
        </button>

        <button class="btn btn-dark btn-outline-info" v-on:click="setSortAttribute('price')">
          Sort by Price <span v-if="sortAttribute === 'price'"> {{sortArrow}} </span>
        </button>
      </div>

      <div class="row">

        <div v-for="product in orderBy(filterBy(products, $parent.nameFilter, 'name'), sortAttribute, sortAscending)">

          <div class="col-md-4 offset-2">
            <div class="card text-white bg-dark mb-5">
              <img v-if='product.images[0]' :src="product.images[0].url" :alt="product.name" class="card-img-top">
              <div class="card-body">
                <h3 class="card-text">
                  <router-link :to="'/products/' + product.id"> 
                    {{ product.name }} - {{product.formatted.price}} 
                  </router-link>
                </h3>
              </div>
            </div>
          </div>

        </div> <!-- end v-for products -->

      </div> <!-- end .row -->
    </div> <!-- end .container -->
  </div> <!-- end .products-index -->
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
        sortAttribute: 'name',
        sortAscending: 1,
        sortArrow: '⬆️'
      };
    },
    created: function() {
      axios.get('/api/products').then(response => {
        this.products = response.data;
      });
    },
    methods: {
      setSortAttribute: function(inputAttribute) {

        if (this.sortAttribute === inputAttribute) {
          this.sortAscending *= -1;
          if (this.sortArrow === '⬆️') {
            this.sortArrow = '⬇️';
          } else {
            this.sortArrow = '⬆️';
          }
        } else {
          this.sortAscending = 1;
          this.sortArrow = '⬆️';
        }
        this.sortAttribute = inputAttribute;
      }
    },
    mixins: [Vue2Filters.mixin]
  };
</script>
