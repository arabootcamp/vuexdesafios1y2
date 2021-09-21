<template>
  <div>

    <hr />
    <section class="mb-5">
      <h2 class="mb-5">Cantidad de juegos totales y de stock total</h2>
      <p>Cantidad de juegos totales: {{numberRegisteredGames}} (registrados en state) - {{numberGamesWithStock}} (disponibles con
        stock)</p>
      <p>Cantidad de stock total: {{totalStock}}</p>
    </section>

    <hr />
    <section class="mb-5">
      <h2 class="mb-5">Filtro</h2>
      <label for="game-code">Ingrese código de juego: </label>
      <input type="text" name="game-code" id="game-code" class="ms-3 mb-5" v-model="searchFilter">
    </section>

    <hr />
    <section>
      <h2 class="mb-5">Listado de juegos con stock</h2>
      <!-- Incluir la propiedad sin valor implicará `true` -->
      <ProductStock />
    </section>

    <section class="my-5 text-center">
      <RenderTable :arrayData="filteredGames" :bgColorTable="true" />
    </section>
  </div>
</template>

<script>
  import RenderTable from './RenderTable.vue'
  export default {
    components: {
      RenderTable,
    },
    name: 'SearchGames',
    data() {
      return {
        searchFilter: '',
      }
    },
    computed: {
      numberRegisteredGames() {
        return this.$store.getters.getNumberRegisteredGames;
      },
      numberGamesWithStock() {
        return this.$store.getters.getNumberGamesWithStock;
      },
      totalStock() {
        return this.$store.getters.getTotalStock;
      },
      gamesWithStock() {
        return this.$store.getters.getGamesWithStock;
      },
      filteredGames() {
        if (this.searchFilter) {
          return this.gamesWithStock.filter((item) => {
            if (item.codigo.includes(this.searchFilter)) {
              return item;
            }
          })
        } else {
          return this.gamesWithStock;
        }
      }
    }
  }
</script>