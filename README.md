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
3. **DB:** At this point I'm just making life harder for my self, but I'm also taking advantage of the MongoDB Atlas free tier so I can have access to my own cloud DB. Comes with 512MB. Yay /s.
4. **Front framework:** Vue 3
5. **Back framework:** .NET 8

🌸🌸WIP🌸🌸
