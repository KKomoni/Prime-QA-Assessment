import HomePage from "../../PageObjects/HomePage";
import ProductDetailPage from "../../PageObjects/ProductDetailPage";

const homePage = new HomePage();
const productDetailPage = new ProductDetailPage();

describe("Add to Cart Functionality", { tags: "Regression" }, () => {
  it("User should be able to add the product to the cart successfully", () => {
    homePage.visitUrl();
    homePage.clickLoginButtonNavbar();
    homePage.inputUsername();
    homePage.inputPassword();
    homePage.clickLoginButton();
    homePage.verifyLoggedInUsername();
    homePage.clickRandomProduct();
    productDetailPage.clickAddToCart();
    productDetailPage.verifyProductAddedAlertText();
    productDetailPage.acceptAlert();
  });
});
