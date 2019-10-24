import { $, ElementFinder } from 'protractor';

export class ShippingStepPage{
  private termsOfServiceChk: ElementFinder;
  private proceedToCheckoutBtn: ElementFinder;

  constructor() {
    this.termsOfServiceChk = $('#cgv');
    this.proceedToCheckoutBtn = $('#form > p > button > span');
  }
  public async clickOnTermsOfService(): Promise<void> {
    await this.termsOfServiceChk.click();
  }

  public async clickOnProceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutBtn.click();
  }
}
