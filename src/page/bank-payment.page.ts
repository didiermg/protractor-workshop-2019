import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private paymentMessageTxt: ElementFinder;

  constructor () {
    this.paymentMessageTxt = $('#center_column > div > p > strong');
  }

  public  getPaymentConfirmationMessage() {
    return this.paymentMessageTxt.getText();
  }
}
