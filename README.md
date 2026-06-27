# WorkForcePro – Test Plan Document

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
* A. Introduction
* B. Scope
* C. Assumptions


# Attahed Excel 📘 Workbook Structure

* Sheet	Content
* Sheet 1	Test Scenarios
* Sheet 2	Detailed Test Cases
* Sheet 3	Requirement Traceability Matrix (RTM)
* Sheet 4	Smoke Test Checklist
* Sheet 5	Defect Report
* Sheet 6	API Test Cases
* Sheet 7	SQL Validation
* Sheet 8	Cypress Automation
* Sheet 9	Accessibility Report
* Sheet 10	Bonus

---

# A. Introduction

This document contains the test planning artifacts for the WorkForcePro Workforce Management platform. It includes high-level test scenarios, detailed manual test cases, and a Requirement Traceability Matrix (RTM) to ensure complete coverage of all functional requirements.

---

# B. Scope

The following functional areas are included:

* Employee Management
* OJT Training Management
* Certification Management

---

# C. Assumptions

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





