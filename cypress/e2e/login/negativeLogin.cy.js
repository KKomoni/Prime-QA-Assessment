import HomePage from "../../PageObjects/HomePage";

const homePage = new HomePage();

describe("Login Functionality", { tags: "Regression" }, () => {
  it("Should not allow login with invalid username or password", () => {
    homePage.visitUrl();
    homePage.clickLoginButtonNavbar();
    homePage.inputInvalidUsername();
    homePage.inputPassword();
    homePage.clickLoginButton();
    homePage.verifyInvalidUserAlertText();
  });
});
