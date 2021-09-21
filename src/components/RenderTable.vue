<template>
  <div>
    <table class="table border border-secondary">
      <thead>
        <tr>
          <th scope="col" v-for="(item, k) in array[0]" :key="k">
            {{ k | upword }}
          </th>
          <th v-if="btnSale">Procesar Venta</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(obj, index) of array"
          :key="index"
          :style="[
            bgColorTable
              ? { backgroundColor: obj.color, color:'#aaa'}
              : { backgroundColor: 'transparent' },
          ]"
        >
          <td v-for="(el, index2) in obj" :key="index2">{{ el }}</td>
          <td v-if="btnSale">
            <button class="btn btn-secondary" @click="sell(obj.codigo)">
              vender
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "RenderTable",
  props: {
    bgColorTable: {
      type: Boolean,
      default: false,
    },
    btnSale: {
      type: Boolean,
      default: false,
    },
    arrayData: Array,
  },
  computed: {
    array() {
      return this.arrayData;
    },
  },
  filters: {
    upword: function (word) {
      if (word == "codigo") return "Código";
      else return word.charAt(0).toUpperCase() + word.slice(1);
    },
  },
  methods: {
    sell(code) {
      this.$store.dispatch("sell", {
        codigo: code,
      });
    },
  },
};
</script>