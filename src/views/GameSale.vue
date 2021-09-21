<template>
  <div>
    <Navbar />
    <div class="container text-center my-5">
      <h1 class="mb-5 text-secondary">Vista de venta de juegos</h1>
      <hr />
      <section class="mb-5">
        <h2 class="mb-5">Cantidad de juegos con stock: {{numberGamesWithStock}}</h2>
      </section>

      <section>
        <RenderTable :arrayData="gamesWithStock" :btnSale="true" />
      </section>
    </div>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue';
  import RenderTable from '../components/RenderTable.vue';

  export default {
    components: {
      Navbar,
      RenderTable,
    },
    computed: {
      numberGamesWithStock() {
        return this.$store.getters.getNumberGamesWithStock;
      },
      gamesWithStock() {
        return this.$store.getters.getGamesWithStock;
      }
    }
  }
</script>