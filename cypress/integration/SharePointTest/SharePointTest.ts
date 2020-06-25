import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(/login to SharePoint with given credentials/, () => {
  console.log('login to SharePoint with given credentials')
});

When(/start a test by clicking "Start" button on Home site/, () => {
  console.log('start a test by clicking "Start" button on Home site')
});

Then(/assert that navigation to Test task site was successful/, () => {
  console.log('assert that navigation to Test task site was successful')
});
