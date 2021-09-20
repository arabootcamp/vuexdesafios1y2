<template>
  <div>
    <Navbar/>
    <header class="text-center mt-5">
      <h1>{{shop}}</h1>
      <h2>{{legend}}</h2>
    </header>
  </div>
</template>

<script>
  import Navbar from './Navbar'
  export default {
    components:{
      Navbar
    },
    computed:{
      shop(){
        return this.$store.getters.getShop;
      },
      legend(){
        return this.$store.getters.getLegend;
      }
    }
  }
</script>