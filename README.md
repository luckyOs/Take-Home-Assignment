# WorkForcePro – Test Planning & Traceability Document

## Document Information

| Item             | Details                                                     |
| ---------------- | ----------------------------------------------------------- |
| Project          | WorkForcePro                                                |
| Module           | Employee Management, OJT Training, Certification Management |
| Document Version | 1.0                                                         |
| Prepared By      | Oshani Lakchani                                             |
| Role             | Software QA Engineer                                        |
| Date             | 27-Jun-2026                                                 |

---

# Table of Contents

1. Introduction
2. Scope
3. Assumptions
4. Test Scenarios
5. Detailed Test Cases
6. Requirement Traceability Matrix (RTM)

---

# 1. Introduction

This document contains the test planning artifacts for the WorkForcePro Workforce Management platform. It includes high-level test scenarios, detailed manual test cases, and a Requirement Traceability Matrix (RTM) to ensure complete coverage of all functional requirements.

---

# 2. Scope

The following functional areas are included:

* Employee Management
* OJT Training Management
* Certification Management

---

# 3. Assumptions

The following assumptions were made due to limited functional specifications:

* Only authenticated administrators can create employees.
* Each employee must have a unique email address.
* Employees belong to only one department.
* Supervisors approve or reject completed OJT training.
* Employees cannot complete training unless it has been assigned.
* Employees may have multiple certifications.
* Certification alerts are generated for certifications expiring within 30 days.
* Validation messages are displayed for invalid or incomplete user input.

---

# 4. Test Scenarios

## 4.1 Employee Management

* Create employee with valid information
* Validate duplicate email restriction
* Validate mandatory fields
* Assign employee to a department
* Prevent assignment to an invalid department

## 4.2 OJT Training

* Assign training to employee
* Prevent assigning training to a non-existing employee
* Complete assigned training
* Prevent completion of unassigned training
* Supervisor approves completed training
* Supervisor rejects completed training

## 4.3 Certification Management

* Add multiple certifications
* Track certification expiry dates
* Identify certifications expiring within 30 days
* Handle expired certifications
* Verify employees can hold multiple certifications

---

# 5. Detailed Test Cases

The detailed test case section includes:

* Test Case ID
* Requirement ID
* Module
* Scenario
* Test Type (Positive / Negative / Edge)
* Priority
* Preconditions
* Test Data
* Steps
* Expected Result
* Automation Candidate

(Refer to the completed Detailed Test Case sheet.)

---

# 6. Requirement Traceability Matrix (RTM)

The RTM maps every business requirement to one or more test scenarios and detailed test cases to ensure complete functional coverage.

The RTM includes:

* Requirement ID
* Requirement Description
* Related Test Scenario
* Related Test Case(s)

All listed requirements (EMP, OJT, and CERT) are mapped to at least one corresponding test case.

**Attahed Excel Workbook Structure
**
Sheet	Content
Sheet 1	Test Scenarios
Sheet 2	Detailed Test Cases
Sheet 3	Requirement Traceability Matrix (RTM)
Sheet 4	Smoke Test Checklist
Sheet 5	Defect Report
Sheet 6	API Test Cases
Sheet 7	SQL Validation
Sheet 8	Cypress Automation
Sheet 9	Accessibility Report
Sheet 10	Bonus


