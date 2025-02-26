/// <reference types="cypress" />

class HomePage {
  constructor() {
    // Selectors
    this.loginButtonNavbar = "#login2";
    this.username = "#loginusername";
    this.password = "#loginpassword";
    this.loginButton = "button[onclick='logIn()']";
    this.loggedInUserName = "#nameofuser";
    this.allProducts = "#tbodyid h4";
  }

  visitUrl() {
    cy.visit("/");
  }

  clickLoginButtonNavbar() {
    return cy.get(this.loginButtonNavbar).click();
  }

  inputUsername() {
    const valiusername = Cypress.env("VALID_USER");
    return cy
      .get(this.username)
      .click()
      .focused()
      .type(valiusername, { delay: 0 });
  }

  inputInvalidUsername() {
    const invalidusername = Cypress.env("INVALID_USER");
    return cy
      .get(this.username)
      .click()
      .focused()
      .type(invalidusername, { delay: 0 });
  }

  inputPassword() {
    const passwordkey = Cypress.env("VALID_PASS");
    return cy
      .get(this.password)
      .click()
      .focused()
      .type(passwordkey, { delay: 0 });
  }

  clickLoginButton() {
    return cy.get(this.loginButton).click();
  }

  verifyLoggedInUsername() {
    return cy
      .get(this.loggedInUserName, { timeout: 10000 })
      .should("be.visible")
      .then(($element) => {
        const actualText = $element.text().trim();
        expect(actualText).to.include("Kaltrina");
      });
  }

  verifyInvalidUserAlertText() {
    // Create explicit event binding
    return new Cypress.Promise((resolve) => {
      cy.on("window:alert", (alertText) => {
        expect(alertText).to.equal("Wrong password.");
        resolve();
      });
    });
  }

  clickRandomProduct() {
    cy.get(this.allProducts)
      .should("be.visible")
      .should("have.length.gt", 0) // Ensure products exist
      .then(($products) => {
        const randomIndex = Math.floor(Math.random() * $products.length);
        const selectedProduct = $products[randomIndex];
        const productName = selectedProduct.innerText;
        Cypress.log({
          name: "clickRandomProduct",
          message: `Clicking product: ${productName}`,
        });
        cy.wrap(selectedProduct).click();
      })
      .then(() => {
        cy.url().should("include", "/prod.html");
      });
  }
}

export default HomePage;
