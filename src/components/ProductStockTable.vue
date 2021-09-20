<template>
  <div>
    <table class="table border border-secondary">
      <thead>
        <tr>
          <th scope="col" v-for="(item,k) in productStock[0]" :key="k">{{k | upword}}</th>
          <th v-if="callSales">Procesar Venta</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(obj,index) of productStock" :key="index"
          :style="[(callFilter || callSales)?{'backgroundColor': 'transparent'}:{'backgroundColor':obj.color}]">
          <td v-for="(el,index2) in obj" :key="index2">{{el}}</td>
          <td v-if="callSales"><button class="btn btn-secondary" @click="sell(obj.codigo)" >vender</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'ListStockColors',
    props: {
      callFilter: {
        type: Boolean,
        default:false
      },
      arrayFilter: Array,
      callSales:{
        type: Boolean,
        default:false
      }
    },
    computed: {
      productStock() {
        if (this.callFilter)
          return this.arrayFilter;
        else
          return this.$store.getters.getProductStock;
      }
    },
    filters: {
      upword: function (word) {
        if (word == 'codigo')
          return 'Código';
        else
          return word.charAt(0).toUpperCase() + word.slice(1);
      }
    },
    methods:{
      sell(code){
        this.$store.dispatch('sell',{codigo:code});
      }
    }
  }
</script>