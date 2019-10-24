import { $, ElementFinder } from 'protractor';

export class SignInPage {
  private emailAddressTxt: ElementFinder;
  private passwordTxt: ElementFinder;
  private submitBtn: ElementFinder;

  constructor () {
    this.emailAddressTxt = $('#email');
    this.passwordTxt = $('#passwd');
    this.submitBtn = $('#SubmitLogin > span');
  }

  public async signIn(): Promise<void> {
    await this.emailAddressTxt.sendKeys('aperdomobo@gmail.com');
    await this.passwordTxt.sendKeys('WorkshopProtractor');
    await this.submitBtn.click();
  }
}
