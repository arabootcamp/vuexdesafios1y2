import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    shop: '32bit',
    legend: 'Juegos de PC y consolas',
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
        stock: "2",
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
    ],
    sales: []
  },
  getters: {
    getShop: state => {
      return state.shop;
    },
    getLegend: state => {
      return state.legend;
    },
    getAllGames: state => {
      return state.product;
    },
    getNumberRegisteredGames: state => {
      return state.product.length;
    },
    getGamesWithStock: state => {
      return state.product.filter((el) => el.stock > 0);
    },
    getNumberGamesWithStock: (state,getters) => {
      return getters.getGamesWithStock.length;
    },
    getTotalStock: (state) => {
      let total = 0;
      state.product.forEach(el => total += parseInt(el.stock));
      return total;
    },
    getSales: (state) => {
      return state.sales;
    },
    getTotalSalesAmount: (state) => {
      let total = 0;
      state.sales.forEach(el => {
        total += parseInt(el.precio)
      });
      return total;
    }
  },
  mutations: {
    removeOneGame(state, payload) {
      const index = state.product.findIndex((el) => (el.codigo == payload.codigo && el.stock > 0));
      if (index != -1) {
        state.product[index].stock -= 1
        payload.status = 'success';
        payload.index = index;
      } else
        payload.status = 'failure';
    },
    addSale(state, payload) {
      payload.add = 'process';
      state.sales.push({
        codigo: payload.codigo,
        nombre: state.product[payload.index].nombre,
        precio: state.product[payload.index].precio
      });
      payload.add = 'success';
    }
  },
  actions: {
    sell({
      dispatch
    }, payload) {
      dispatch('processSale', payload).
      then(() => dispatch('registerSale', payload))
        .then(() => {
          alert('Venta procesada');
        })
        .catch(() => {
          alert('Venta rechazada. No hay stock o el producto no existe');
        });
    },
    processSale({
      commit
    }, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          payload.status = 'process';
          commit('removeOneGame', payload);
          if (payload.status == 'success')
            resolve();
          else
            reject();
        }, 2000); 
      });
    },
    registerSale({
      commit
    }, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('addSale', payload);
          if (payload.add == 'success')
            resolve();
          else
            reject();
        }, 1000); 
      });
    }
  }
});

export default store;