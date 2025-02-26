/// <reference types="cypress" />

class ProductDetailPage {
  constructor() {
    // Selectors
    this.addToCart = ".btn.btn-success.btn-lg";
  }

  clickAddToCart() {
    cy.get(this.addToCart).click();
  }

  verifyProductAddedAlertText() {
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Product added.");
    });
  }

  acceptAlert() {
    cy.on("window:alert", () => true);
  }
}

export default ProductDetailPage;
