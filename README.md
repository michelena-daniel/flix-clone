## What is flix-clone?
Flix-clone is a portfolio/hobby project to mimic some of the video streaming capabilites of the likes of Netflix, Prime, Hulu...etc.

## Architecture

### Keywords
- DDD (Domain Driven Design)
- Hexagonal Architecture (Adapter, core agnosticism)
- Microservices

### Architecture overview and solutions

The main goal of the project was to mimic Netflix current architecture. We are talking about a well established architecture which is really complex. Then we'll have to dumb down a lot of stuff to make it work for a solo project which tries to keeps costs down to zero. This comes with many issues:

1. **Microservice architecture and deployments as a solo dev:** The preferred and actual right way to develop this would be with a well layered microservice design. Ideally we would want to deploy every domain as its own service and then have each service communicate with the others using HTTP/REST petitions, message brokers, or both. I believe Netflix uses a combination of REST APIs and Apache Kafka. This would be very costly and inefficient for me. However I'm still trying to mimic this kind of set up and that's why I opted for a **modulith**, a monolith application which tries to keep services as separated as possible. I will use this to try and follow DDD and Hexagonal Architecture. It's far from optimal but it's the most cost-effective way to do it as a simple portfolio project, I mean, hell, I'm even deploying front and back together to have a single service running...
2. **Video and image store (blob storage in general):** I'm currently trying to make this work with the free tier of Cloudinary. A bit limited in comparison with a full fledged S3.
3. **DB:** At this point I'm just making life harder for my self, but I'm also taking advantage of the MongoDB Atlas free tier so I can have access to my own cloud DB. Comes with 512MB. Yay /s. I was planning to use Cassandra like netflix does but it seemed overkill. Might still switch to it at some point, but since traffic will be 0 or very low traffic I won't really have to manage actual write-heavy time-series data or any data in general.
4. **Front framework:** Vue 3
5. **Back framework:** .NET 8
6. **Data sources:** Since I don't have access to actual movie licenses and such, I'm still figuring out what to actually stream on the platform. One option would be to use API's like YouTube's, Vimeo's and such to stream movie previews instead of actual movies. Another one would be to pull/scrape old movies without licensing involved, indie movies and anything free I could get my hands on, still since this is a hobby project and not much more than a POC (with very limited data constraints), it's not the central point of the whole operation.

## Workflow:

I've tried to set agile-ish sprint like tasks to complete an MVP, which are separated in three areas:

### Backend MVP:
B-001: Set up basic structure for .NET backend.
B-002: Add necessary project references and remove extra WebAPI.
B-003: Configure Program.cs and add Dependency Injection for services.
B-004: Create Movie and Category domain entities.
B-005: Define value objects for Movie attributes (e.g., Title, Description).
B-006: Create repository interfaces for Movie and Category.
B-007: Implement MovieRepository and CategoryRepository.
B-008: Set up MongoDB connection and configure MongoDbContext.
B-009: Implement MongoDB repositories for Movie and Category.
B-010: Add Cloudinary for media uploads in backend.
B-011: Create service for media upload using Cloudinary.
B-012: Add controllers for movie and category API endpoints.
B-013: Handle file uploads and image URL storage for movie posters.
B-014: Implement search and filter functionality for movies.
B-015: Implement authentication and user login.
B-016: Add basic unit tests for repositories and services.

### Frontend MVP:
F-001: Set up Vue.js project (Vue Router, TypeScript, Vuex, etc.).
F-002: Set up folder structure and clean up unused Vue components.
F-003: Configure basic Vuex store for movies and categories.
F-004: Create MovieList component with basic movie fetching logic.
F-005: Implement MovieCard component for displaying individual movies.
F-006: Update MovieList to show movies in horizontal layout.
F-007: Integrate a Vue.js carousel component for movie display.
F-008: Add spinner for loading state in MovieList component.
F-009: Implement category-based movie fetching and display logic.
F-010: Create MovieDetail page for individual movie details.
F-011: Improve MovieListPage for rendering multiple categories with carousels.
F-012: Add Cloudinary URL handling to display movie posters.
F-013: Create navigation and routing between home, movie list, and movie detail pages.
F-014: Implement search functionality on the frontend.
F-015: Implement basic UI styling for a modern look and feel.
F-016: Integrate frontend with backend API for fetching movies.
F-017: Integrate category API to fetch movie categories.
F-018: Connect MovieDetail page to backend API for retrieving individual movie details.
F-019: Implement API calls for uploading movie posters to Cloudinary via backend.
F-020: Implement search functionality by connecting the frontend to the backend search API.
F-021: Handle authentication (if required) by integrating frontend with backend login and user management.

### Devops MVP:
D-001: Set up GitHub repository for version control.
D-002: Configure .gitignore for both frontend (Vue.js) and backend (NET).
D-003: Set up environment variable handling (e.g., MongoDB credentials, Cloudinary keys).
D-004: Set up MongoDB Atlas for cloud database.
D-005: Configure Cloudinary for media storage.
D-006: Set up CI/CD pipelines (GitHub Actions) for automatic testing and deployment.
D-007: Set up hosting for frontend and backend.
D-008: Set up HTTPS and security for frontend and backend deployments.
D-009: Monitor and configure cloud usage (MongoDB, Cloudinary) to stay within free tier limits.
D-010: Implement basic error logging and monitoring.

🌸🌸WIP🌸🌸
