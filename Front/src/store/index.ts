import { createStore } from "vuex";

// Define the Movie type
interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  description: string;
}

export default createStore({
  state: {
    user: null as string | null,
    moviesByCategory: {} as Record<string, Movie[]>, // Properly typed
    categories: [] as string[], // Properly typed
    loading: false,
  },
  getters: {
    user: (state) => state.user,
    moviesByCategory: (state) => (category: string) =>
      state.moviesByCategory[category] || [], // Return empty array if no movies exist for category
    categories: (state) => state.categories,
    loading: (state) => state.loading,
  },
  mutations: {
    setUser(state, user: string | null) {
      state.user = user;
    },
    setCategories(state, categories: string[]) {
      state.categories = categories;
    },
    setMoviesForCategory(
      state,
      { category, movies }: { category: string; movies: Movie[] }
    ) {
      console.log(`Committing movies for category ${category}:`, movies);
      state.moviesByCategory = {
        ...state.moviesByCategory,
        [category]: movies, // Update the specific category with its movies
      };
      console.log("Updated moviesByCategory state:", state.moviesByCategory);
    },
    setLoading(state, loading: boolean) {
      state.loading = loading;
    },
  },
  actions: {
    login({ commit }, user: string) {
      commit("setUser", user);
    },
    async fetchCategories({ commit, dispatch }) {
      try {
        commit("setLoading", true);
        // Simulate fetching categories
        const categories = ["Action", "Comedy", "Drama", "Sci-Fi"]; // These should not be empty
        commit("setCategories", categories);
        // Now fetch movies for each category
        await Promise.all(
          categories.map(async (category) => {
            await dispatch("fetchMoviesForCategory", category);
          })
        );
        commit("setLoading", false);
      } catch (error) {
        commit("setLoading", false);
        console.error("Error fetching categories:", error);
      }
    },
    async fetchMoviesForCategory({ commit }, category: string) {
      console.log(`Starting to fetch movies for category: ${category}`);
      try {
        // Simulate fetching movies by category from an API
        const movies: Movie[] = await new Promise((resolve) => {
          setTimeout(() => {
            const moviesByCategory: Record<string, Movie[]> = {
              Action: [
                {
                  id: 1,
                  title: "The Matrix",
                  posterUrl: "https://via.placeholder.com/150",
                  description:
                    "A computer hacker learns about the true nature of reality.",
                },
                {
                  id: 2,
                  title: "Mad Max: Fury Road",
                  posterUrl: "https://via.placeholder.com/150",
                  description:
                    "In a post-apocalyptic world, a drifter and a warrior team up.",
                },
              ],
              Comedy: [
                {
                  id: 3,
                  title: "The Hangover",
                  posterUrl: "https://via.placeholder.com/150",
                  description: "Three friends wake up from a bachelor party.",
                },
              ],
              Drama: [
                {
                  id: 4,
                  title: "Forrest Gump",
                  posterUrl: "https://via.placeholder.com/150",
                  description:
                    "A man with a low IQ recounts his extraordinary life.",
                },
              ],
              "Sci-Fi": [
                {
                  id: 5,
                  title: "Inception",
                  posterUrl: "https://via.placeholder.com/150",
                  description:
                    "A thief who steals corporate secrets through dream-sharing technology.",
                },
                {
                  id: 6,
                  title: "Interstellar",
                  posterUrl: "https://via.placeholder.com/150",
                  description:
                    "A team of explorers travels through a wormhole in space.",
                },
              ],
            };

            console.log(
              `Fetched movies for category ${category}:`,
              moviesByCategory[category]
            );
            resolve(moviesByCategory[category]);
          }, 1000); // Simulate 1-second delay
        });

        if (!movies) {
          console.error(`No movies found for category: ${category}`);
        }

        commit("setMoviesForCategory", { category, movies });
        console.log(`Movies for category ${category} committed to Vuex store`);
      } catch (error) {
        console.error(`Error fetching movies for category ${category}:`, error);
      }
    },
  },
  modules: {},
});
