import { browser } from 'protractor';
import { MenuContentPage,
   SignInPage,
   AddressStepPage,
   ShippingStepPage,
   PaymentStepPage,
   ProductListPage,
   ProductAddedModalPage,
   SummaryStepPage,
   OrderSummaryPage,
   BankPaymentPage
  } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const sigInPage: SignInPage = new SignInPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.selectProduct('Faded Short Sleeve T-shirts');
    await(browser.sleep(3000));
    await productAddedModalPage.proceedToCheckout();
    await(browser.sleep(3000));
    await summaryStepPage.proceedToCheckout();
    await(browser.sleep(3000));
    await sigInPage.signIn();
    await(browser.sleep(3000));
    await addressStepPage.clickOnProceedToCheckout();
    await(browser.sleep(3000));
    await shippingStepPage.clickOnTermsOfService();
    await(browser.sleep(3000));
    await shippingStepPage.clickOnProceedToCheckout();
    await(browser.sleep(3000));
    await paymentStepPage.payByBankWire();
    await(browser.sleep(3000));
    await orderSummaryPage.confirmMyOrder();
    await(browser.sleep(3000));

    await expect(bankPaymentPage.getPaymentConfirmationMessage())
      .toBe('Your order on My Store is complete.');
  });
});
