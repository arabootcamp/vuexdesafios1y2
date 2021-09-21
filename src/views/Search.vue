<template>
  <div>
    <Navbar />
    <div class="container text-center my-5">
      <h1 class="mb-5 text-secondary"> Vista de búsqueda de juegos</h1>
      <SearchGames />
    </div>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue';
  import SearchGames from '../components/SearchGames.vue';

  export default {
    components: {
      Navbar,
      SearchGames
    }
  }
</script>