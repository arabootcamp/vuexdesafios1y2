<template>
  <div class="my-5 text-center">
    <label for="game-code">Ingrese código de juego: </label>
    <input type="text" name="game-code" id="game-code" class="ms-3 mb-5" v-model="searchFilter">
    <!--true,false, envio array-->
    <ProductStockTable callFilter v-bind:bgColor="false" :arrayFilter="filteredProduct" />

  </div>
</template>

<script>
  import ProductStockTable from './ProductStockTable.vue'
  export default {
    components: {
      ProductStockTable,
    },
    data() {
      return {
        searchFilter: '',
      }
    },
    name: 'FilterCode',
    computed: {
      productStock() {
        return this.$store.getters.getProductStock;
      },
      filteredProduct() {
        if (this.searchFilter) {
          return this.productStock.filter((item) => {
            if (item.codigo.includes(this.searchFilter)){
             return item;
            }
          })
        } else {
          return this.productStock;
        }
      }
    }
  }
</script>