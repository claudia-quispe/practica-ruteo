<template>
    <div>
        <h2>Login</h2>
        <form class="form">
        <div class="form-group">
            <label for="exampleInputEmail1">Nombre de Usuario</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Recordar mi usuario</label>
        </div>
        <button type="submit" class="btn btn-dark">Login</button>
        </form>
    </div>
</template>
<script>
//import Ingreso from './components/Ingreso.vue'

export default {
  name: 'Ingreso',
  components: {
    //Ingreso
  }
}
</script>
