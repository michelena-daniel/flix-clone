<template>
  <div v-if="movie">
    <h1>{{ movie.title }}</h1>
    <img :src="movie.posterUrl" :alt="movie.title" />
    <p>{{ movie.description }}</p>

    <router-link to="/movies">Back to Movies</router-link>
  </div>

  <div v-else>
    <p>Loading movie details...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

// Define the Movie type
interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  description: string;
}

export default defineComponent({
  name: "MovieDetail",
  setup() {
    const store = useStore();
    const route = useRoute();
    const movieId = route.params.id;

    // Get all movies from the store
    const allMovies = computed(
      () => Object.values(store.getters.moviesByCategory).flat() as Movie[]
    );

    // Find the movie by ID
    const movie = computed(() =>
      allMovies.value.find((m) => m.id === parseInt(String(movieId)))
    );

    // Fetch categories and movies if they aren't already loaded
    onMounted(async () => {
      if (!movie.value) {
        await store.dispatch("fetchCategories").then(() => {
          store.getters.categories.forEach((category: string) => {
            store.dispatch("fetchMoviesForCategory", category);
          });
        });
      }
    });

    return {
      movie,
    };
  },
});
</script>

<style scoped>
/* Add your styles here */
</style>
