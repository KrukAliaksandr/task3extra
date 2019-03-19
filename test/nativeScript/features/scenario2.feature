@All
Feature: nativeScript

    @aliaksandr2
    Scenario: TabSwitch
        Given I open "https://market.nativescript.org/" url
        When I click on "2" element from "HeaderTab"
        Then Class Attribute of element "2" from "HeaderTab" should be "selected"