@All
Feature: nativeScript

    @aliaksandr1
    Scenario: Check main tabs
        Given I open "https://market.nativescript.org/" url
        Then Count of "HeaderTab" should be "3"
        And Text of element "1" from "HeaderTab" should be "Plugins"
        And Text of element "2" from "HeaderTab" should be "Templates"
        And Text of element "3" from "HeaderTab" should be "Samples"
        