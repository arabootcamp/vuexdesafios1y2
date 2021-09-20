<template>
  <div>
    <p>Cantidad de juegos totales: {{registeredGames}}</p>
    <p>Cantidad de stock total: {{totalStock}}</p>
  </div>
</template>

<script>
  export default {
    name: 'TotalGames',
    computed: {
      registeredGames() {
        return this.$store.getters.getRegisteredGames;
      },
      totalStock() {
        return this.$store.getters.getTotalStock;
      }
    }
  }
</script>