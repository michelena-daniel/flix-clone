<template>
  <div class="carousel-container">
    <h1>Movies by Category</h1>

    <!-- Display Loading Spinner if any category is still loading -->
    <LoadingSpinner v-if="loading || !allMoviesLoaded" />

    <!-- Show carousels for each category once movies are loaded -->
    <div v-if="!loading && allMoviesLoaded">
      <!-- Loop through each category and render a carousel for it -->
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="category-carousel"
      >
        <h2>{{ category }} Movies</h2>

        <!-- Movie Carousel for each category -->
        <Carousel
          v-if="moviesByCategory[category].length > 0"
          :items-to-show="4"
          :wrap-around="true"
          :mouse-drag="true"
          :autoplay="8000"
          :pause-autoplay-on-hover="true"
        >
          <!-- Movie Slides -->
          <Slide v-for="movie in moviesByCategory[category]" :key="movie.id">
            <MovieCard :movie="movie" />
          </Slide>

          <!-- Pagination and Navigation -->
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </Carousel>

        <!-- Show No Movies Message if Category Has No Movies -->
        <div v-if="moviesByCategory[category].length === 0">
          No movies available for {{ category }}.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { useStore } from "vuex";
import MovieCard from "./MovieCard.vue";
import LoadingSpinner from "./common/LoadingSpinner.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  description: string;
}

export default defineComponent({
  name: "MovieList",
  components: {
    MovieCard,
    LoadingSpinner,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const store = useStore();

    // Get categories and movies by category from the Vuex store
    const categories = computed(() => {
      const categoriesList = store.getters.categories as string[];
      return categoriesList;
    });

    const moviesByCategory = computed(() => {
      const moviesData: Record<string, Movie[]> = {};

      categories.value.forEach((category: string) => {
        moviesData[category] = store.getters.moviesByCategory(category);
      });

      return moviesData;
    });

    const loading = computed(() => store.getters.loading);

    const allMoviesLoaded = computed(() => {
      console.log("Movies by Category:", moviesByCategory.value); // Debugging log

      return categories.value.every(
        (category) => moviesByCategory.value[category] !== undefined // Ensure movies are loaded for every category
      );
    });

    // Fetch categories and movies when the component is mounted
    onMounted(() => {
      store.dispatch("fetchCategories").then(() => {
        categories.value.forEach((category: string) => {
          console.log(`Fetching movies for category: ${category}`);
          store.dispatch("fetchMoviesForCategory", category);
        });
      });
    });

    return {
      categories,
      moviesByCategory,
      loading,
      allMoviesLoaded,
    };
  },
});
</script>

<style scoped>
.carousel-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  text-align: left;
  margin-bottom: 10px;
}

.category-carousel {
  margin-bottom: 40px;
}

.carousel__arrow {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  padding: 10px;
  font-size: 2rem;
  cursor: pointer;
}

.carousel__arrow:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
