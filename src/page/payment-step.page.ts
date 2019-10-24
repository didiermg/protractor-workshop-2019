import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankWireBtn: ElementFinder;

  constructor () {
    this.payByBankWireBtn = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async payByBankWire(): Promise<void> {
    await this.payByBankWireBtn.click();
  }
}
