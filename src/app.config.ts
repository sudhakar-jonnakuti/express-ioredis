import { cleanEnv, port, str } from "envalid";

const appEnvValidate = () => {
  cleanEnv(process.env, {
    APP_PORT: port(),
    REDIS_PORT: port(),
    REDIS_HOST: str()
  });
};

export { appEnvValidate };
