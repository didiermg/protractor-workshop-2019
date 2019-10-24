import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private confirmMyOrderBtn: ElementFinder;

  constructor () {
    this.confirmMyOrderBtn = $('#cart_navigation > button > span');
  }

  public async confirmMyOrder(): Promise<void> {
    await this.confirmMyOrderBtn.click();
  }
}
