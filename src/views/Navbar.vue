<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="text-light text-decoration-none hover-orange" :to="{name: 'presentation'}">Inicio</router-link>
            </li>
            <li class="nav-item ms-lg-3">
              <router-link class="text-light text-decoration-none hover-orange" :to="{name: 'search'}">Búsquedas</router-link>
            </li>
            <li class="nav-item ms-lg-3">
              <router-link class="text-light text-decoration-none hover-orange" :to="{name: 'search'}">Ventas</router-link>
            </li>
            <li class="nav-item ms-lg-3">
              <router-link class="text-light text-decoration-none hover-orange" :to="{name: 'search'}">Total</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style scoped>
.hover-orange:hover{
  color:orange!important;
}
</style>