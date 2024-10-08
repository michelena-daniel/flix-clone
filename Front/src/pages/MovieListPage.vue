<template>
  <div class="movie-list-page">
    <MovieListComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieListComponent from "../components/MovieList.vue";

export default defineComponent({
  name: "MovieListPage",
  components: {
    MovieListComponent,
  },
});
</script>

<style scoped>
.movie-list-page {
  padding: 20px;
}
</style>
