@All
Feature: nativeScript

    @aliaksandr1
    Scenario: Check main tabs
        Given I open "https://market.nativescript.org/" url
        When I click on "0" element from "HeaderTab"
        Then Count of "HeaderTab" should be "3"
        