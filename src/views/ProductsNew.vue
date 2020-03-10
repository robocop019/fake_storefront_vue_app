<template>
  <div class="products-new">
    <h1>Create New Product</h1>  

    <ul>
      <li class='error' v-for="error in errors">
        {{ error }}
      </li>
    </ul>

    <form v-on:submit.prevent='submit()'>

      <div>
        Name: <input v-model="newProductName">
      </div>

      <div>
        Price: <input v-model="newProductPrice">
      </div>

      <div>
        Description: <input v-model="newProductDescription">
      </div>

      <div>
        Image Url: <input v-model="newProductImageUrl">
      </div>

      <input type="submit" value='Create Product'>      
    </form>

  </div>
</template>

<style>
  .error {
    color: red;
    list-style: none;
  }
</style>


<script>
  var axios = require('axios');

  export default {
    data: function() {
      return {
              newProductName: '',
              newProductPrice: '',
              newProductDescription: '',
              newProductImageUrl: '',
              errors: []
      };
    },
    created: function() {

    },
    methods: {
      submit: function() {
        var params = {
                      name: this.newProductName,
                      price: this.newProductPrice,
                      description: this.newProductDescription,
                      image_url: this.newProductImageUrl
        };

        axios.post('/api/products', params).then(response => {
          console.log('Success', response.data);
          this.$router.push('/');
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
      }
    }
  }
</script>