<template>
  <div>
    <Navbar />
    <div class="container text-center my-5">
      <h1 class="mb-5 text-secondary"> Vista de búsqueda de juegos</h1>

      <hr />
      <section class="mb-5">
        <h2 class="mb-5">Filtro</h2>
        <FilterCode />
      </section>

      <hr />
      <section class="mb-5">
        <h2 class="mb-5">Cantidad de juegos totales y de stock total</h2>
        <TotalGames />
      </section>

      <hr />
      <section>
        <h2 class="mb-5">Listado de juegos con stock</h2>
        <!-- Incluir la propiedad sin valor implicará `true` -->
        <ListStockColors bgColor/>
      </section>
    </div>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue';
  import FilterCode from '../components/FilterCode.vue';
  import TotalGames from '../components/TotalGames.vue';
  import ListStockColors from '../components/ProductStockTable.vue';

  export default {
    components: {
      Navbar,
      FilterCode,
      TotalGames,
      ListStockColors
    }
  }
</script>