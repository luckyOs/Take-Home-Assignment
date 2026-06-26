class EmployeePage {

  visit() {
    cy.visit("/employees");
  }

  createEmployee(name, email, dept, supervisor) {
    cy.get("#name").type(name);
    cy.get("#email").type(email);
    cy.get("#department").select(dept);
    cy.get("#supervisor").select(supervisor);
    cy.get("button[type='submit']").click();
  }

  getSuccessMessage() {
    return cy.get(".success-message");
  }

  getErrorMessage() {
    return cy.get(".error-message");
  }
}

export default new EmployeePage();
