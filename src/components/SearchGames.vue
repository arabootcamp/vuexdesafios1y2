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
    <section class="my-5 text-center">
      <RenderTable :arrayData="filteredGames" :bgColorTable="true" />
    </section>
  </div>
</template>

<script>
  import RenderTable from './RenderTable.vue';
  import {mapGetters} from 'vuex';
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
      ...mapGetters(
        {numberRegisteredGames:'getNumberRegisteredGames',
         numberGamesWithStock:'getNumberGamesWithStock',
         totalStock: 'getTotalStock',
         gamesWithStock: 'getGamesWithStock'
         }),
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