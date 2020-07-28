<template>
    <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="@/assets/img-one.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="@/assets/img-two.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="@/assets/img-three.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Imagenes',
  props: {
    imagenes: String
  }
}
</script>