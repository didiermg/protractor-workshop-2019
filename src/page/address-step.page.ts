import { $, ElementFinder } from 'protractor';

export class AddressStepPage{
  private proceedToCheckoutBtn: ElementFinder;

  constructor() {
    this.proceedToCheckoutBtn = $('#center_column > form > p > button > span');
  }
  public async clickOnProceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutBtn.click();
  }
}
