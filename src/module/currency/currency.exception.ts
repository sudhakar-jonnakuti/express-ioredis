import { InternalServeError } from "@shared/error/server.error";

const getCurrencyException = (error: unknown) => {
  throw new InternalServeError(error);
};

export { getCurrencyException };
