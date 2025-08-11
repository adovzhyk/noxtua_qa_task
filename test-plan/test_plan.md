# Counter Application Test Plan

## 1. Introduction
This test plan follows the ISTQB standards and outlines the testing approach for the Counter Application. The application is a simple web-based counter with increment and decrement functionality. This plan covers all test activities to ensure the application meets its requirements and quality standards.

### 1.1 Purpose
To define the scope, approach, resources, and schedule for testing the Counter Application. This document identifies test items, features to be tested, testing tasks, responsibilities, and risks.

### 1.2 Scope
Testing will cover:
- Functional testing of increment/decrement operations
- Boundary value analysis
- Edge case handling
- User interface validation
- Error handling

## 2. Test Objectives
1. Verify counter starts at initial value (0)
2. Validate increment functionality increases count by 1
3. Validate decrement functionality decreases count by 1
4. Confirm correct handling of boundary values
5. Ensure proper display of positive and negative values
6. Verify application stability under high-frequency operations

## 3. Test Items
- Counter display element
- Increment button
- Decrement button
- Value storage and calculation logic
- User interface components

## 4. Features to be Tested
| Feature | Test Priority | Test Type |
|---------|---------------|-----------|
| Initial counter state | High | Functional |
| Increment operation | High | Functional |
| Decrement operation | High | Functional |
| Sequential operations | Medium | Functional |
| Large number handling | Medium | Performance |
| Negative values | Medium | Functional |
| UI responsiveness | Low | Usability |

## 5. Features Not to be Tested
- Browser compatibility (only Chrome latest will be used)
- Mobile responsiveness
- Accessibility compliance
- Security vulnerabilities
- Localization

## 6. Test Approach

### 6.1 Test Techniques
| Technique | Application | Tools |
|-----------|-------------|-------|
| Equivalence Partitioning | Input value ranges | Manual |
| Boundary Value Analysis | Min/max values | Manual |
| Decision Table Testing | Operation sequences | Manual |
| State Transition | Counter state changes | Automated |
| Error Guessing | Negative value handling | Manual |

### 6.2 Test Types
1. **Functional Testing**: Verify core operations
2. **Boundary Testing**: Validate edge cases
3. **Usability Testing**: Confirm intuitive interface
4. **Performance Testing**: Assess large number handling

## 7. Entry Criteria
1. Requirements finalized and approved
2. Test environment established
3. Test data prepared
4. Build deployed to test environment
5. Test cases reviewed and approved

## 8. Exit Criteria
1. All critical test cases executed
2. No open critical/high severity defects
3. 100% test coverage of requirements
4. All identified defects resolved or deferred with approval
5. Test results reviewed and approved

## 9. Test Environment
- **Hardware**: Standard development laptop
- **OS**: Windows 11
- **Browser**: Chrome v120+
- **Network**: Localhost
- **Test Data**: Predefined value sets

## 10. Defect Management
- Defects will be tracked using GitHub Issues
- Severity classification:
  - Critical: Application crash
  - High: Core functionality failure
  - Medium: Incorrect behavior
  - Low: Cosmetic issues
- Defect lifecycle: New → Open → Fixed → Verified → Closed

## 11. Test Automation
- Automated tests for regression suite
- Tools: Cypress
- Automation coverage: 70% of test cases
- Automation scope:
  - Initial state verification
  - Single operations
  - Sequence operations
  - Boundary value tests

## 12. AI Tool Usage

| Task                          | AI Contribution                                                                 |
|------------------------------|----------------------------------------------------------------------------------|
| Test Plan Generation         | Used AI to structure a full ISTQB-compliant test plan                            |
| Test Case Design             | AI identified edge cases, boundary values, and functional paths                  |
| Test Automation              | AI generated JavaScript code to simulate user interactions and validate results |
| UI Enhancement               | AI suggested styling and layout improvements for test visibility                 |
| Test Execution Framework     | AI created reusable test functions and summary dashboard                        |

# Test Cases

## TC-001: Verify Initial State
**Objective**: Confirm counter starts at 0  
**Precondition**: Application loaded  
**Steps**:  
1. Launch application  
2. Observe counter display  
**Expected**: Counter shows 0  
**Priority**: High  

## TC-002: Single Increment Operation
**Objective**: Validate increment increases count by 1  
**Precondition**: Counter at initial state (0)  
**Steps**:  
1. Click increment button  
**Expected**: Counter shows 1  
**Priority**: High  

## TC-003: Single Decrement Operation
**Objective**: Validate decrement decreases count by 1  
**Precondition**: Counter at initial state (0)  
**Steps**:  
1. Click decrement button  
**Expected**: Counter shows -1  
**Priority**: High  

## TC-004: Multiple Increments
**Objective**: Verify consecutive increments  
**Precondition**: Counter at 0  
**Steps**:  
1. Click increment button 5 times  
**Expected**: Counter shows 5  
**Priority**: Medium  

## TC-005: Multiple Decrements
**Objective**: Verify consecutive decrements  
**Precondition**: Counter at 0  
**Steps**:  
1. Click decrement button 5 times  
**Expected**: Counter shows -5  
**Priority**: Medium  

## TC-006: Mixed Operations
**Objective**: Validate operation sequence  
**Precondition**: Counter at 0  
**Steps**:  
1. Increment (1)  
2. Increment (2)  
3. Decrement (1)  
4. Increment (2)  
5. Decrement (1)  
6. Decrement (0)  
**Expected**: Counter shows 0 after sequence  
**Priority**: High  

## TC-007: Boundary Value (Zero)
**Objective**: Verify behavior around zero  
**Precondition**: Counter at 0  
**Steps**:  
1. Decrement (-1)  
2. Increment (0)  
3. Decrement (-1)  
4. Increment (0)  
**Expected**: Correct transitions between -1 and 0  
**Priority**: Medium  

## TC-008: Large Number Handling
**Objective**: Validate performance with large values  
**Precondition**: Counter at 0  
**Steps**:  
1. Click increment button 1000 times  
**Expected**: Counter shows 1000  
**Priority**: Low  

## TC-009: Negative Value Display
**Objective**: Confirm negative values handled properly  
**Precondition**: Counter at -5  
**Steps**:  
1. Verify counter display  
**Expected**: Counter shows -5 clearly  
**Priority**: Medium  

## TC-010: Rapid Operation
**Objective**: Test application under stress  
**Precondition**: Counter at 0  
**Steps**:  
1. Click increment 50 times rapidly  
2. Click decrement 50 times rapidly  
**Expected**: Counter shows 0, no UI freeze  
**Priority**: Low  

---

# Traceability Matrix

| Requirement | Test Cases |
|-------------|------------|
| REQ-01: Initial state | TC-001 |
| REQ-02: Increment functionality | TC-002, TC-004, TC-006, TC-008 |
| REQ-03: Decrement functionality | TC-003, TC-005, TC-006 |
| REQ-04: Handle negative values | TC-003, TC-005, TC-007, TC-009 |
| REQ-05: Performance | TC-008, TC-010 |

# My Personal Take as a QA Lead
In enterprise environments or projects with diverse browser requirements, Playwright often wins due to its flexibility and robustness. But for fast-paced front-end teams or startups, Cypress can be a joy to work with thanks to its simplicity and tight feedback loop.

| Feature                     | **Cypress**                                                  | **Playwright**                                               |
|----------------------------|---------------------------------------------------------------|---------------------------------------------------------------|
| **Language Support**       | JavaScript / TypeScript only                                  | JavaScript, TypeScript, Python, C#, Java                      |
| **Browser Support**        | Chrome, Edge, Electron, limited Firefox                       | Chromium, Firefox, WebKit (Safari engine)                     |
| **Execution Model**        | Runs inside browser (DOM-level control)                       | Runs outside browser (Node.js-based)                          |
| **Cross-Origin Testing**   | Limited due to same-origin policy                             | Full support for multi-domain and multi-tab testing           |
| **Network Interception**   | Basic support                                                 | Advanced request/response mocking and interception            |
| **Parallel Execution**     | Via Cypress Dashboard or CI setup                             | Native support with built-in parallelism                      |
| **Mobile Emulation**       | Requires plugins or manual setup                              | Built-in device emulation (viewport, geolocation, etc.)       |
| **Debugging Experience**   | Excellent live browser preview                                | Trace viewer, screenshots, video recording                    |
| **Test Isolation**         | Automatic state reset between tests                           | Manual control over context and isolation                     |
| **CI/CD Integration**      | Strong with plugins and Cypress Dashboard                     | Native GitHub Actions templates and artifact generation       |
| **Component Testing**      | Supported (React, Vue, etc.)                                  | Limited support                                               |
| **Learning Curve**         | Easier for beginners                                          | Steeper, but more flexible                                    |
| **Community & Ecosystem** | Large and active community                                    | Rapidly growing, backed by Microsoft                          |

## ✅ Use Case Recommendations

- **Choose Cypress** if:
  - You want fast setup and intuitive debugging.
  - Your app is single-origin and doesn’t require multi-tab or cross-domain testing.
  - You prefer a strong UI for test authoring and execution.

- **Choose Playwright** if:
  - You need robust cross-browser and cross-platform testing.
  - Your tests involve multiple domains, tabs, or mobile emulation.
  - You want advanced control over network and browser contexts.