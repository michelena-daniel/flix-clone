<template>
  <div v-if="movie">
    <h1>{{ movie.title }}</h1>
    <img :src="movie.posterUrl" alt="Movie poster" />
    <p>{{ movie.description }}</p>

    <router-link to="/movies">Back to Movies</router-link>
  </div>

  <div v-else>
    <p>Loading movie details...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  description: string;
}

export default defineComponent({
  name: "MovieDetailPage",
  setup() {
    const store = useStore();
    const route = useRoute();
    const movieId = route.params.id;

    // Cast movieId to string to handle string | string[] issue
    const id = Array.isArray(movieId) ? movieId[0] : movieId;

    // Fetch all movies and flatten the categories to search for the movie
    const allMovies = computed(
      () => Object.values(store.getters.moviesByCategory).flat() as Movie[]
    );

    // Find the movie by ID
    const movie = computed(() =>
      allMovies.value.find((m) => m.id === parseInt(String(id)))
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
h1 {
  margin-top: 1.5rem;
  text-align: center;
}
img {
  display: block;
  margin: 0 auto;
}
p {
  text-align: center;
  margin-top: 1rem;
}
</style>
