<template>
  <div>
    <p>Cantidad de juegos totales: {{totalProduct}}</p>
    <p>Cantidad de stock total: {{totalStock}}</p>
  </div>
</template>

<script>
  export default {
    name: 'TotalGames',
    computed: {
      totalProduct() {
        return this.$store.getters.getTotalProduct;
      },
      totalStock() {
        return this.$store.getters.getTotalStock;
      }
    }


  }
</script>