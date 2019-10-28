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
    await productListPage.selectProduct('Faded Short Sleeve T-shirts');
    await productAddedModalPage.proceedToCheckout();
    await summaryStepPage.proceedToCheckout();
    await sigInPage.signIn();
    await addressStepPage.clickOnProceedToCheckout();
    await shippingStepPage.clickOnTermsOfService();
    await shippingStepPage.clickOnProceedToCheckout();
    await paymentStepPage.payByBankWire();
    await orderSummaryPage.confirmMyOrder();

    await expect(bankPaymentPage.getPaymentConfirmationMessage())
      .toBe('Your order on My Store is complete.');
  });
});
