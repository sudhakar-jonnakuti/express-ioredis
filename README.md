# express-ioredis

```

Up application:
docker-compose -f developer.docker-compose.yml up -d

Down application:
docker-compose -f developer.docker-compose.yml down -v --rmi all

Steps to login in redis-commander:

1. Open redis-commander in the web browser by visiting http://localhost:8081.
2. To log in, fill in the following details
> Username : root
> Password : qwerty

Q1. Why Redis is commonly paired with Express.js ?

Redis is commonly paired with Express.js to enhance web application development.

1. Caching: Redis offers fast in-memory storage for caching, reducing database load and improving response times.

2. Session Management: Efficient handling of user sessions across multiple instances, ensuring authentication persistence during scaling.

3. Real-time Features: Utilize Redis' publish-subscribe messaging for building live chat, notifications, and real-time updates.

4. Rate Limiting & Throttling: Implement mechanisms to control access rates and prevent abuse through Redis.

5. Task Queue: Manage background processing and job execution asynchronously using Redis as a task queue.

6. Fast Data Access: Leverage Redis's sub-millisecond response times for quick data retrieval, enhancing performance.

7. Distributed Caching: Act as a centralized caching layer for consistent data access in multi-server or microservices architectures.

8. Flexible Data Structures: Support for various data structures enables modeling data for specific use cases.

9. Persistence: Configurable persistence to disk ensures durability for critical data while maintaining speed advantages.

Reference:

Foreign exchange rates and currency conversion JSON API
https://fixer.io/

Caching Strategies in Node.js: Improving Performance and Efficiency
https://levelup.gitconnected.com/caching-strategies-in-node-js-improving-performance-and-efficiency-6a7fd929e165

Caching and Beyond: Harnessing Redis with Node.js
https://medium.com/@hussainghazali/caching-and-beyond-harnessing-redis-with-node-js-b692b1508f41

How To Implement Caching in Node.js Using Redis
https://www.digitalocean.com/community/tutorials/how-to-implement-caching-in-node-js-using-redis

```
