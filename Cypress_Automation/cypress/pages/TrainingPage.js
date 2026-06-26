class TrainingPage {

  visit() {
    cy.visit(Cypress.env("baseUrl") + "/training");
  }

  assignTraining(emp, training) {
    cy.get("#employee").select(emp);
    cy.get("#training").select(training);
    cy.get("#dueDate").type("2026-07-30");
    cy.get("#assignBtn").click();
  }

  completeTraining() {
    cy.get("#completeBtn").click();
  }

  approveTraining() {
    cy.get("#approveBtn").click();
  }
}

export default new TrainingPage();
