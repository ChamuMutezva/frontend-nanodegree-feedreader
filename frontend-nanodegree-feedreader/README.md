# Project Overview

This project is a web-based application that reads RSS feeds. I used [Jasmine](http://jasmine.github.io/) for testing purposes.Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development" to ensure that their projects works well. I used this project to master my skills of using Jasmine to write a number of tests against a pre-existing application

## How to use the application

1. Review the application in your browser and the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works and do the same with the Jasmine spec file in **./jasmine/spec/feedreader.js**

2. Several edits can be made one at a time to force a failure

        1.  Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in the application. Return the `allFeeds` variable to a passing state.

        2. Edit the  `name` property of the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in the application.The `name` property should be set to an empty string. Return the property to it's original state after the test. Carry out the same procedure for the `URL` property of the `allFeeds` variable by making it empty so that the `URL` length will be 0.

        3. The same procedure is carried for the `The menu` where the test is to check if the element is hidden by default. If the `body` contains a `class` called `menu-hidden` then that `menu` is hidden.

        4. The next test ensures the `menu` changes visibility when the `menu icon` is clicked. This test should have two expectations: does the `menu` display when clicked and does it hide when clicked again.This is achieved through the use of the click method of the `menu` and changing the `expect` statement to `toBe` true. We carry on to check if the menu toggles on and off. The if statement is used for the toggling effect. The statements in the if block are put vice-versa to force a failure.

        5. The `Initial test` is an async test, for this test the `beforeEach` is used. The `expect` statement inside the `completes work` where the expectation is that the children of the feed container has a length property that is greater than 0 to be true. To force a failure remove the keyword `done` from the `beforeEach` function.

        6. The last test suite is the `New Feed Selection` where the test is to ensure that content changes when the `loadFeed()` function is loaded. In this test 2 feeds has to be loaded to check that the content changes.The `done` keyword is also removed to force a failure.

## About the author

Chamunorwa Mutezva also known as Chamu Mutezva is a student at Udacity for the Front-End Web Developer Nanodegree program.

## Installation

1.Download the zip folder from [Github](https://github.com/ChamuMutezva/frontend-nanodegree-feedreader-master.git)
     Unzip your folder and open it
     Look for the index.html file
     Right click it and select `View in browser`

## Dependencies

1. [Google Apis]("http://fonts.googleapis.com/css?family=Roboto:400,100,300,700">)
2. [Jasmine Libraries].
    1. (jasmine/lib/jasmine-2.1.2/jasmine.css).
    2. (jasmine/lib/jasmine-2.1.2/jasmine.js).
    3. (jasmine/lib/jasmine-2.1.2/jasmine-html.js).
    4. (jasmine/lib/jasmine-2.1.2/boot.js).

## Contributions

The main `code` was provided by Udacity as a course work.
Please you are free to email on (ckmutezva@gmail.com)

I was inspired by Udacity to do the project as part of my course work and was guided by the Udacity mentors on areas that i needed explanation.
