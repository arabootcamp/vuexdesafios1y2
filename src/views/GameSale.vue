<template>
  <div>
    <Navbar />
    <div class="container text-center my-5">
      <h1 class="mb-5 text-secondary">Vista de venta de juegos</h1>
      <hr />
      <section class="mb-5">
        <h2 class="mb-5">Cantidad de juegos con stock: {{getGamesWithStock}}</h2>
      </section>
      <hr />
      <section>
        <productStockTable :callSales="true" />
      </section>
    </div>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue';
  import ProductStockTable from '../components/ProductStockTable.vue';

  export default {
    components: {
      Navbar,
      ProductStockTable,
    },
    computed: {
      getGamesWithStock() {
        return this.$store.getters.getGamesWithStock;
      }
    }
  }
</script>