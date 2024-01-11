import Redis from "ioredis";

export const appRedis = new Redis({
  port: Number(process.env.REDIS_PORT),
  host: process.env.REDIS_HOST
});
