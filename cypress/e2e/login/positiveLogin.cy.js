import HomePage from "../../PageObjects/HomePage";

const homePage = new HomePage();

describe("Login Functionality", { tags: "Regression" }, () => {
  it("Should allow login with valid credentials", () => {
    homePage.visitUrl();
    homePage.clickLoginButtonNavbar();
    homePage.inputUsername();
    homePage.inputPassword();
    homePage.clickLoginButton();
    homePage.verifyLoggedInUsername();
  });
});
