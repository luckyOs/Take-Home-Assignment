import TrainingPage from "../pages/TrainingPage";

describe("Training Workflow", () => {

  it("Assign Training", () => {

    cy.login("admin@test.com", "Admin@123");

    TrainingPage.visit();

    TrainingPage.assignTraining("EMP1001", "Safety Training");

    cy.get(".success-message")
      .should("contain", "Training assigned");
  });

  it("Complete Training", () => {

    cy.login("emp@test.com", "Emp@123");

    TrainingPage.visit();

    TrainingPage.completeTraining();

    cy.get(".status")
      .should("contain", "Completed");
  });

  it("Approve Training", () => {

    cy.login("supervisor@test.com", "Sup@123");

    TrainingPage.visit();

    TrainingPage.approveTraining();

    cy.get(".status")
      .should("contain", "Approved");
  });

});
