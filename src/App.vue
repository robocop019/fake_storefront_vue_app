<template>
  <div id="app">
    <div id="nav">

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to='/'>Bowen's Sports Memorabilia</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">

            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to='/products/new'>New Product</router-link>
            </li>
          </ul>

          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search for Products" aria-label="Search" v-model='nameFilter'>
            <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
          </form>

        </div>
      </nav>
    </div> <!-- end #nav -->

    <router-view/>
  </div>
</template>

<style>

</style>

<script>
  export default {
    data: function() {
      return {
        nameFilter: ''
      };
    }
  };
</script>
