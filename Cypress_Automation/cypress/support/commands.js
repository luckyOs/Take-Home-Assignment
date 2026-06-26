// Login command
Cypress.Commands.add("login", (email, password) => {
  cy.visit("/login");
  cy.get("#email").type(email);
  cy.get("#password").type(password);
  cy.get("button[type='submit']").click();
});

// API Request helper
Cypress.Commands.add("createEmployeeAPI", (payload) => {
  return cy.request({
    method: "POST",
    url: "/api/employees",
    body: payload,
    failOnStatusCode: false
  });
});
