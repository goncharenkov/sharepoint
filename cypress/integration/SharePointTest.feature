Feature: Share point test

  Scenario: Navigation between sites works properly
    Given login to SharePoint with given credentials
    When start a test by clicking "Start" button on Home site
    Then assert that navigation to Test task site was successful