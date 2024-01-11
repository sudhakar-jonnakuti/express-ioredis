import { getCurrencyException } from "@module/currency/currency.exception";
import { CurrencyService } from "@module/currency/currency.service";
import { SuccessOk } from "@shared/response/success/success.response";
import { Request, Response } from "express";

class CurrencyController {
  currencyService: CurrencyService;

  constructor() {
    this.currencyService = new CurrencyService();
  }

  getCurrency = async (request: Request, response: Response) => {
    try {
      const resultGetCurrency = await this.currencyService.getCurrency();
      SuccessOk(response, resultGetCurrency);
    } catch (error: unknown) {
      getCurrencyException(error);
    }
  };
}

export { CurrencyController };
