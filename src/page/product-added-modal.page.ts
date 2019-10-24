import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private proceedToCheckoutBtn: ElementFinder;

  constructor () {
    this.proceedToCheckoutBtn = $('[style*="display: block;"] .button-container > a');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutBtn.click();
  }
}
