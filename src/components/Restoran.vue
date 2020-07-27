<template>
    <div class>
        <!-- route accede a la ruta// route.params marca los parametros, valriales de-->
        <h2 class="title">Sobre {{ $route.params.yumyum }}</h2>
        <!-- Acá añadimos links con router-link (como se verá en router) {http://localhost:8080/#/ + nombre de ruta + /images}-->
        <router-link v-bind:to="{ path: '/' + $route.params.yumyum }">About </router-link>
        <router-link v-bind:to="{ path: '/' + $route.params.yumyum +'/reviews' }">Reviews </router-link>
        <router-link v-bind:to="{ path: '/' + $route.params.yumyum +'/images' }">Imagenes</router-link>
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