import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proceedToCheckoutBtn: ElementFinder;

  constructor () {
    this.proceedToCheckoutBtn = $('.standard-checkout');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutBtn.click();
  }
}
