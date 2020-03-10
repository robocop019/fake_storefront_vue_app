<template>
  <div class="products-edit">
    <h1>Edit Product</h1>  

    <ul>
      <li class='error' v-for="error in errors">
        {{ error }}
      </li>
    </ul>

    <form v-on:submit.prevent='submit()'>

      <div>
        Name: <input v-model="product.name">
      </div>

      <div>
        Price: <input v-model="product.price">
      </div>

      <div>
        Description: <input v-model="product.description">
      </div>

      <div>
        Image Url: <input v-model="product.image_url">
      </div>

      <input type="submit" value='Update Product'>      
    </form>
  </div>
</template>

<style></style>

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
                        formatted: {
                                    price: '',
                                    created_at: ''
                                    } 

                        },
              errors: []
      };
    },
    created: function() {
      axios.get('/api/products/' + this.$route.params.id).then(response => {
        this.product = response.data;
      });
    },
    methods: {
      submit: function() {
        var params = {
                      name: this.product.name,
                      price: this.product.price,
                      description: this.product.description,
                      image_url: this.product.image_url
                      };
                      
        axios.patch('/api/products/' + this.product.id, params).then(response => {
          console.log(response.data);
          this.$router.push('/products/' + this.product.id);
        });
      }
    }
  };
</script>