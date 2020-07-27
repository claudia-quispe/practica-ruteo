<template>
    <div class="container">
        <h2> Listado de {{ $route.params.nombrecategoria}} </h2>
        <div class="row">
            <div class="col-sm-2">
               
            </div>
            <div class="col-sm-8">
                <ul class="list-group">
                    <li class="list-group-item">Gourmet</li>
                    <li class="list-group-item">Deliccio</li>
                    <li class="list-group-item">DelliStore</li>
                    <li class="list-group-item">Barista</li>
                    <li class="list-group-item">Taberna</li>
                    <li class="list-group-item">Delicius</li>
                    <li class="list-group-item">Mazzareli</li>
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