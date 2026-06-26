class EmployeePage {

  visit() {
    cy.visit(Cypress.env("baseUrl") + "/employees");
  }

  createEmployee(name, email, dept, supervisor) {
    cy.get("#name").type(name);
    cy.get("#email").type(email);
    cy.get("#department").select(dept);
    cy.get("#supervisor").select(supervisor);
    cy.get("#saveBtn").click();
  }
}

export default new EmployeePage();
