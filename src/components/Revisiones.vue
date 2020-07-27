<template>
    <div class="container">
        <h4>Reviews</h4>
        <div class="media">
            <img src="@/assets/icon-woman.png" class="mr-3" alt="icon">
            <div class="media-body">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
        </div>
        <div class="media">
            <img src="@/assets/icon-man.png" class="mr-3" alt="icon">
            <div class="media-body">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
        </div>
        <div class="media">
            <img src="@/assets/icon-woman.png" class="mr-3" alt="icon">
            <div class="media-body">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Revisiones',
  components: {
      //
  }
}
</script>
<style>
.tittle {
    margin: 20px 0 0;
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
    display: block;
}
.mr-3 {
    width: 100px;
}
.media {
    margin-top: 60px;
}
.media-body {
    margin-top: 30px;
}



</style>