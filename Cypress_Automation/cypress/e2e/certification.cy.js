import CertificationPage from "../pages/CertificationPage";

describe("Certification Tracking", () => {

  it("Expiry Alert Validation", () => {

    cy.login("admin@test.com", "Admin@123");

    CertificationPage.visit();

    CertificationPage.checkExpiryAlert()
      .should("contain", "Expiring within 30 days");
  });

});
