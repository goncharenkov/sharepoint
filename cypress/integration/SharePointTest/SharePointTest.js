import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

const PAGE_URL = "https://antongshortpoint.sharepoint.com/sites/HomeSite";
const TEST_TASK_URL = "https://antongshortpoint.sharepoint.com/sites/HomeSite/internalsite/testtask";

before(() => {
    cy.visitSP(PAGE_URL);
});

Given(/login to SharePoint with given credentials/, () => {
    cy.title().should('eq', 'Home Site - Home')
});

When(/start a test by clicking "Start" button on Home site/, () => {
    cy.clickOnDetachedButton('.shortpoint-btn');
});

Then(/assert that navigation to Test task site was successful/, () => {
    cy.url().should('contain', TEST_TASK_URL)
});