<template>
  <div class="home-container">
    <!-- Hero Section with Background Image and Gradient Overlay -->
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Fli<span class="red-x">x</span>Clone</h1>
        <p>Your ultimate movie collection app.</p>
        <button class="cta-button">Browse Movies</button>
      </div>
    </section>
    <!-- Additional Info Section -->
    <section class="info-section">
      <div class="info-content">
        <h2>Why FlixClone?</h2>
        <p>Discover an extensive collection of movies, curated just for you.</p>
        <ul class="features-list">
          <li><i class="fas fa-film"></i> Thousands of movies</li>
          <li><i class="fas fa-star"></i> Personalized recommendations</li>
          <li><i class="fas fa-user"></i> Custom profiles</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
});
</script>

<style scoped>
/* Ensure no element overflows and causes horizontal scroll */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Full-page container */
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw; /* Full viewport width, but no overflow */
  max-width: 100%; /* Prevent overflow */
  overflow-x: hidden; /* Hide any potential overflow */
  background-color: #f8f9fa;
}

/* Hero section with gradient overlay */
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba");
  background-size: cover;
  background-position: center;
  height: 80vh;
  width: 100%;
  color: white;
  padding: 0 20px;
  position: relative;
}

/* Hero content */
.hero-content {
  max-width: 800px;
  animation: fadeIn 1s ease-in-out;
}

/* Hero title with red "x" in FlixClone */
.hero-content h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.red-x {
  color: #ff6f61; /* Red color for the "x" */
}

/* Hero subtitle */
.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

/* Call-to-action button */
.cta-button {
  background-color: #ff6f61;
  color: white;
  padding: 12px 30px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #ff4c3a;
}

/* Info section */
.info-section {
  padding: 60px 20px;
  text-align: center;
  background-color: #ffffff;
  width: 100%;
}

.info-content {
  max-width: 900px;
  margin: 0 auto;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  font-size: 1.2rem;
  margin: 15px 0;
}

.features-list li i {
  color: #ff6f61;
  margin-right: 10px;
}

/* Fade-in animation for hero text */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.2rem;
  }

  .hero-content p {
    font-size: 1.2rem;
  }

  .hero {
    height: 60vh;
  }

  .cta-button {
    font-size: 1rem;
    padding: 10px 20px;
  }
}
</style>
