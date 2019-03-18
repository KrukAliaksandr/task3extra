@All
Feature: nativeScript

    @aliaksandr2
    Scenario: TabSwitch
        Given I open "https://market.nativescript.org/" url
        When I click on "1" element from "HeaderTab"
        Then Class Attribute of "1" from "HeaderTab" should be "selected"