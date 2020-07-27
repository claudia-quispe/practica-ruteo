<template>
    <div class="container">
        <!-- route accede a la ruta// route.params marca los parametros, valriales de-->
        <h2 class="title">Sobre {{ $route.params.yumyum }}</h2>
        <router-view />
    </div>
</template>

<script>
export default {
  name: 'Restoran',
  components: {
      //
  }
}
</script>
<style>
.tittle {
    margin: 40px 0 0;
}
.container {
    display: inline-block;
    background-color:white;
    padding: 10px 70px ;
    border-radius: 6px;    
}
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 60px 40px;
}
.btn {
    width: 100px;
}

</style>