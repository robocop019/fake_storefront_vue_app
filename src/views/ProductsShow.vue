<template>
  <div class="products-show">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <h2> {{product.name}} </h2>
          <img :src="product.images[0].url" :alt="product.name">
        </div>

        <div class="col-md-5">
          <p> {{product.formatted.price}} </p>
          <p> {{product.description}} </p>

          <div>
            <router-link :to="'/products/' + product.id + '/edit'"> 
              <button>Update Product</button> 
            </router-link>

            <button v-on:click='destroyProduct()'>Delete Product</button>
          </div>
          
        </div>
      </div>

    </div> <!-- end .container -->
  </div> <!-- end .products-show -->
</template>

<style>
  
</style>

<script>
  var axios = require('axios');

  export default {
    data: function() {
      return {
              product: {
                        id: '',
                        name: '',
                        price: '',
                        description: '',
                        images: [],
                        formatted: {
                                    price: '',
                                    created_at: ''
                                    }
                        }
      };
    },
    created: function() {
      axios.get('/api/products/' + this.$route.params.id).then(response => {
        this.product = response.data;
      });
    },
    methods: {
      destroyProduct: function() {
        axios.delete('/api/products/' + this.$route.params.id).then(response => {
          this.$router.push('/');
        });
      }
    }
  };
</script>