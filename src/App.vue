<template>
  <div id="app" class="container">
    <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand">Trash Food</a>
        <form class="form-inline">
          <router-link v-bind:to="{ path: `/` }"> Home </router-link>
        </form>
    </nav>
    <router-view />
  </div>
</template>

<script>
//import DojoReviews from './DojoReviews.vue'

export default {
  name: "App",
 
}
</script>
<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;

}
.img-fluid {
  width: 500px;
  height: 100px;
  padding: 40px;
}
h2 {
  padding: 40px 0 0 ;
}
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 10px;
    padding: 60px 30px;
}
.card {
    width: 600px;
    margin: auto;
    margin-top: 40px;
}
.text {
    display: block;
}
.btn {
    margin: 5px;
}
.card-img, .card-img-top {
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px);
    width: 270px;
    margin: auto;
    margin-top: 40px;
}
h4 {
    margin-bottom: 40px
}
.img-fluid {
    width: 500px;
    height: 500px;
}
.form {
    margin: 10px 0 0;
    display: inline-block;
    background-color:white;
    padding: 30px 100px ;
    border-radius: 6px;    
}
.d-block {
  padding: 30px 100px;
  width: 300px;
  height: 600px;

}
.mr-3 {
  width: 60px;
  height: 60px;
}
.cont {
  padding: 40px;

}
.media {
  padding: 15px;;
}

</style>