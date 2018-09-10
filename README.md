# Project Overview

This project is a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and left an incomplete application test suite. 

## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development" to ensure that their projects works well. I used this project to master my skills of using Jasmine to write a number of tests against a pre-existing application. 

## How to use the application

1. Review the application in your browser at first before undertaking anything.
2. Review the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works and do the same with the Jasmine spec file in **./jasmine/spec/feedreader.js**

3. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in the application

4. Return the `allFeeds` variable to a passing state.

5. Edit the name properties of the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in the application. Return the property to it's original state after the test. Carry out the same procedure for the URL property of the `allFeeds` variable



