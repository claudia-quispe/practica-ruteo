<template>
    <div class="container">
        <h4>Nuestras Favoritas</h4>
        <div class="card-group">
            <div class="card">
                <img src="@/assets/burguer.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Hamburguesa Vegetariana</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
            <div class="card">
                <img src="@/assets/burguer.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Hamburguesa Vegana</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
            <div class="card">
                <img src="@/assets/burguer.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Hamburguesa Casera</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Imagenes',
  components: {
      //
  }
}
</script>
<style scoped>
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

</style>