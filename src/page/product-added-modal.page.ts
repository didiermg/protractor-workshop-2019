import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductAddedModalPage {
  private proceedToCheckoutBtn: ElementFinder;

  constructor () {
    this.proceedToCheckoutBtn = $('[style*="display: block;"] .button-container > a');
  }

  public async proceedToCheckout(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.proceedToCheckoutBtn));
    await this.proceedToCheckoutBtn.click();
  }
}
