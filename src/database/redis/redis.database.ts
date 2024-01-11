import { InternalServeError } from "@shared/error/server.error";

import { appRedis } from "./redis.config";

class AppDatabase {
  redisHealthCheck = async () => {
    try {
      const redisHealth = await appRedis.ping();
      console.log(`Redis Health: ${redisHealth}`);
    } catch (error: unknown) {
      throw new InternalServeError(error);
    } finally {
      await appRedis.quit();
    }
  };

  redisDisconnect = async () => {
    try {
      await appRedis.disconnect();
    } catch (error: unknown) {
      throw new InternalServeError(error);
    }
  };
}

export { AppDatabase };
