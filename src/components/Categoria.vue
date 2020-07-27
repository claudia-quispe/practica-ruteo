<template>
    <div>
        <h2> Listado de {{ $route.params.nombrecategoria}} </h2>
        <div class="row">
            <div class="col-sm-2">
               
            </div>
            <div class="col-sm-8">
                <ul class="list-group">
                    <a href="#" class="list-group-item list-group-item-action list-group-item-light">Hamburguesas</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-light">Shawarma</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-light">Papas Fritas</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-light">Pizza</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-light">Hamburguesa</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-light">Papas Bravas</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-light">Hot-Dog</a>
                </ul>
            </div>
            <div class="col-sm-2">
               
            </div>
        </div>
    </div>       
</template>

<script>
export default {
  name: 'Categoria',
  components: {
      //
  }
}
</script>
<style scoup>
.container {
    margin: auto;
    display: block;
}
.tittle {
    margin: 20px 0 0;
}
.row {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 40px 0px;
}



</style>