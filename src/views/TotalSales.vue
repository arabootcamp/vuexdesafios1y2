<template>
  <div>
    <Navbar />
    <div class="container text-center my-5">
      <h1 class="mb-5 text-secondary">Total de ventas</h1>
      <hr />
      <section>
        <h2>Listado total de ventas</h2>
        <RenderTable :arrayData="sales" />
      </section>
      
      <section class="mb-5">
        <h2 class="mb-5 pt-5">Monto total de ventas: {{totalSalesAmount}}</h2>
      </section>

    </div>
  </div>
</template>

<script>
  import RenderTable from '../components/RenderTable.vue';
  import Navbar from './Navbar.vue';

  export default {
    components: {
      Navbar,
      RenderTable
    },
    computed: {
      sales() {
        return this.$store.getters.getSales;
      },
      totalSalesAmount() {
        return this.$store.getters.getTotalSalesAmount;
      }
    }
  }
</script>