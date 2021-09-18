<template>
  <div>
    <div class="container mt-5 text-center">
      <h1 class="mb-5">Página no encontrada</h1>
      <button class="btn btn-dark" @click="$router.go(-1)">Regresar</button>
    </div>
  </div>
</template>

<style scoped>
button:hover{
color: orange !important;
}
</style>