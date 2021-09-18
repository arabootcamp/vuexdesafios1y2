<template>
  <div>
    <table class="table border border-secondary">
      <thead>
        <tr>
          <th scope="col" v-for="(item,k) in productStock[0]" :key="k">{{k | upword}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(obj,index) of productStock" :key="index"
          :style="[bgColor?{'backgroundColor':obj.color}:{'backgroundColor': 'transparent'}]">
          <td v-for="(el,index2) in obj" :key="index2">{{el}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'ListStockColors',
    props: {
      bgColor: Boolean,
      callFilter: Boolean,
      arrayFilter: Array
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
    }

  }
</script>