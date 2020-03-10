<template>
  <div class="home">

    <h1>All Products</h1>
    <div v-for="product in products">
      <h3>{{ product.name }}</h3>
      <img v-bind:src="product.image_url" v-bind:alt="product.name">

      <div v-if='currentProduct === product'>
        <p>{{ product.formatted.price }}</p>
        <p>{{ product.description }}</p>

        <div>
          <h3>Update Product</h3>
          <div>
            Name: <input v-model='product.name'>
          </div>

          <div>
            Price: <input v-model='product.price'>
          </div>

          <div>
            Description: <input v-model='product.description'>
          </div>

          <div>
            Image Url: <input v-model='product.image_url'>
          </div>  

          <div>
            <button v-on:click='updateProduct(product)'>Update Product</button>
          </div>        
        </div>

        <div>
          <button v-on:click='destroyProduct(product)'>Delete Product</button>
        </div>
      </div>

      <div>
        <button v-on:click='showProduct(product)'>More Info</button>
      </div>
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
        products: [],
        newProductName: '',
        newProductPrice: '',
        newProductDescription: '',
        newProductImageUrl: '',
        currentProduct: ''
      };
    },
    created: function() {
      axios.get('/api/products').then(response => {
        this.products = response.data;
        console.log(this.products);
      });
    },
    methods: {
 
      showProduct: function(inputProduct) {
        if(this.currentProduct === inputProduct) {
          this.currentProduct = '';
        } else {
          this.currentProduct = inputProduct;
        }
      },

      updateProduct: function(inputProduct) {
        var params = {
                      name: inputProduct.name,
                      price: inputProduct.price,
                      description: inputProduct.description,
                      image_url: inputProduct.image_url
                      };

        axios.patch('/api/products/' + inputProduct.id, params).then(response => {
          console.log('Success', response.data);
        });
      },

      destroyProduct: function(inputProduct) {
        axios.delete('/api/products/' + inputProduct.id).then(response => {
           console.log('Success', response.data);
        });

        var index = this.products.indexOf(inputProduct);
        console.log(index);

        this.products.splice(index, 1);
      }
    }
  };
</script>
