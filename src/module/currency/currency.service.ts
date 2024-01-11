import { appRedis } from "@database/redis/redis.config";
import { getCurrencyException } from "@module/currency/currency.exception";
import { ICurrencyService } from "@module/currency/currency.interface";
import axios from "axios";

class CurrencyService implements ICurrencyService {
  async getCurrency() {
    const FIXER_API_URL = "http://data.fixer.io/api/latest";
    const FIXER_ACCESS_KEY = ""; // Fixer API Access Key
    const FIXER_SYMBOLS = "INR";

    try {
      await appRedis.connect();
      console.log("Connect to the Redis cache");
      const cacheCurrency = await appRedis.get("cacheCurrency");

      if (cacheCurrency) {
        // If data exists in the cache, return it
        console.log("Fetching data from Redis cache");
        return JSON.parse(cacheCurrency);
      } else {
        console.log("Fetching data from Fixer URI");
        const fixerURI = `${FIXER_API_URL}?access_key=${FIXER_ACCESS_KEY}&symbols=${FIXER_SYMBOLS}`;
        const fixerResponse = await axios.get(fixerURI);
        const fixerResponsSuccess = fixerResponse.data?.success;
        const fixerResponseDataINR = fixerResponsSuccess ? fixerResponse.data?.rates?.INR : "";
        const getCurrencyResponse = { currency: { eur: 1, inr: fixerResponseDataINR } };

        // Cache for 1 hour
        await appRedis.set("cacheCurrency", JSON.stringify(getCurrencyResponse), "EX", 3600);
        return getCurrencyResponse;
      }
    } catch (error: unknown) {
      getCurrencyException(error);
    } finally {
      await appRedis.quit();
      console.log("Close connect to the Redis cache");
    }
  }
}

export { CurrencyService };
