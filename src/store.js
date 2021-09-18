import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    otracosa: 'otracosa',
    product: [{
        codigo: "0001",
        nombre: "Sekiro",
        stock: "100",
        precio: "30000",
        color: "red",
        destacado: "true"
      },
      {
        codigo: "0002",
        nombre: "fifa 21",
        stock: "100",
        precio: "25000",
        color: "blue",
        destacado: "false"
      },
      {
        codigo: "0003",
        nombre: "Gear of War 4",
        stock: "100",
        precio: "15000",
        color: "green",
        destacado: "true"
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: "100",
        precio: "35000",
        color: "yellow",
        destacado: "false"
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: "100",
        precio: "10000",
        color: "blue",
        destacado: "false"
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: "100",
        precio: "20000",
        color: "red",
        destacado: "true"
      },
      {
        codigo: "0011",
        nombre: "A",
        stock: "0",
        precio: "20000",
        color: "red",
        destacado: "true"
      },
      {
        codigo: "0012",
        nombre: "B",
        stock: "10",
        precio: "20000",
        color: "green",
        destacado: "true"
      },
      {
        codigo: "0013",
        nombre: "C",
        stock: "100",
        precio: "20000",
        color: "yellow",
        destacado: "true"
      },
      {
        codigo: "0021",
        nombre: "D",
        stock: "0",
        precio: "20000",
        color: "red",
        destacado: "true"
      },
      {
        codigo: "0022",
        nombre: "E",
        stock: "50",
        precio: "20000",
        color: "red",
        destacado: "true"
      }

    ]
  },
  getters: {
    getProductStock: state => {
      return state.product.filter((el) => el.stock > 0);
    },
    getTotalProduct: (state, getters) => {
      return getters.getProductStock.length;
    },
    getTotalStock: (state) => {
      let total = 0;
      state.product.forEach(el => total += parseInt(el.stock));
      return total;
    }
  },
  mutations: {},
  actions: {}
});

export default store;