<template>
  <div class="movie-card">
    <img :src="movie.posterUrl" :alt="movie.title" class="movie-poster" />
    <div class="movie-info">
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  description: string;
}

export default defineComponent({
  name: "MovieCard",
  props: {
    movie: {
      type: Object as PropType<Movie>,
      required: true,
    },
  },
});
</script>

<style scoped>
.movie-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}

.movie-poster {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.movie-info {
  margin-top: 8px;
  text-align: center;
}

h2 {
  font-size: 1.5em;
  margin: 0;
}

p {
  margin: 8px 0 0;
}
</style>
