<template>
    <div>
        <!-- route accede a la ruta// route.params marca los parametros, valriales de-->
        <h2 class="title">Sobre {{ yumyum }}</h2>
        <!-- Acá añadimos links con router-link (como se verá en router) {http://localhost:8080/#/ + nombre de ruta + /images}-->
        <router-link :to="{ name: 'acercade', params: {yumyum: yumyum} }">About </router-link>
        <router-link :to="{ name: 'revisiones', params: {yumyum: yumyum} }">Reviews </router-link>
        <router-link :to="{ name: 'imagenes', params: {yumyum: yumyum} }">Imagenes</router-link>
        <router-view />
    </div>
</template>

<script>
export default {
  name: 'Restoran',
  props: {
    yumyum: String
  }
}
</script>