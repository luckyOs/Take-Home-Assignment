class TrainingPage {

  assignTraining(empId, trainingId) {
    cy.get("#employee").select(empId);
    cy.get("#training").select(trainingId);
    cy.get("#dueDate").type("2026-07-30");
    cy.get("button#assign").click();
  }

  completeTraining() {
    cy.get("button#complete").click();
  }

  approveTraining() {
    cy.get("button#approve").click();
  }
}

export default new TrainingPage();
