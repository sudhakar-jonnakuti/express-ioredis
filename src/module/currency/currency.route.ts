import { CurrencyController } from "@module/currency/currency.controller";
import { Router } from "express";

class CurrencyRoute {
  path = "/v1/currency";
  router = Router();
  controller: CurrencyController;

  constructor() {
    this.controller = new CurrencyController();
    this.initRoute();
  }

  initRoute(): void {
    this.router.get(this.path, this.controller.getCurrency);
  }
}

export { CurrencyRoute };
