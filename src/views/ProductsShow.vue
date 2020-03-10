<template>
  <div class="products-show">
    <h2> {{product.name}} </h2>
    <img :src="product.image_url" :alt="product.name">

    <p> {{product.formatted.price}} </p>
    <p> {{product.description}} </p>
  </div>
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
                        image_url: '',
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
    methods: {}
  };
</script>