import EmployeePage from "../pages/EmployeePage";
import data from "../fixtures/employee.json";

describe("Employee Management", () => {

  it("TC-EMP-001 - Create Employee", () => {

    cy.login("admin@test.com", "Admin@123");

    EmployeePage.visit();

    EmployeePage.createEmployee(
      data.employee.name,
      data.employee.email,
      data.employee.department,
      data.employee.supervisor
    );

    cy.get(".success-message")
      .should("contain", "Employee created successfully");
  });

  it("TC-EMP-002 - Duplicate Email", () => {

    cy.login("admin@test.com", "Admin@123");

    EmployeePage.visit();

    EmployeePage.createEmployee(
      "John Test",
      data.employee.email,
      "IT",
      "SUP001"
    );

    cy.get(".error-message")
      .should("contain", "Email must be unique");
  });

});
