@All
Feature: nativeScript

    @aliaksandr3
    Scenario: Check main tabs
        Given I open "https://market.nativescript.org/" url
        When I type "Wear" in "SearchInput"
        Then Text of each "ResultItemHeader" should contain "wear"

        