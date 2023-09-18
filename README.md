# SSDI_P2

Project Documentation: SSDI Project 2
Project Title: Project #2

Table of Contents:-
1-  Introduction
     -  Project Overview
     -  Purpose of Documentation
2-  Project Files
    -  File Structure
    -  Description of Files
    -  File Relationships
3-  Project Specifications
    -  Problem 1: Generate a Multi Filter Function
    -  Problem 2: Template Processor
    -  Problem 3: Fix test-project2.js to Not Pollute the Global Namespace
4-  Setup and Usage
    -  Prerequisites
    -  Installation
    -  Usage
5-  Output Screenshots
6-  Testing
    -  Browser Compatibility
    -  Validation
7-  Credits
    -  Acknowledgments
    -  Resources Used

1. Introduction
   Project Overview- The purpose of this project is to develop JavaScript functions that address specific programming challenges. It aims to enhance our understanding of JavaScript and its core concepts, such as functions, prototypes, and modules.
   Purpose of Documentation- This documentation's goal is to serve as a thorough overview of the project, outlining its requirements, file structure, setup procedures, and other factors to take into account. Users can use this documentation to better understand, alter, and build upon the project as required.

2. Project Files
   File Structure
The following files are located in the project's directory (project2):
make-multi-filter.js: The Multi Filter Function (MakeMultiFilter) as mentioned in Problem 1 is implemented in this file. The MakeMultiFilter function and associated logic are defined.
template-processor.js: The Template Processor class (TemplateProcessor) implementation from Problem 2 is contained in this file. It describes the fillIn method of the TemplateProcessor class.
test-project2.js: The test script for assessing the performance of the implementations in make-multi-filter.js and template-processor.js is contained in this file. It also incorporates the adjustments made to avoid global namespace pollution in response to Problem 3.
test-project2.html: This HTML page acts as a test runner for a web browser to perform the tests specified in test-project2.js.
node_modules/: This directory contains dependencies, such as ESLint, which is used to evaluate the quality of the code. Using npm, these dependencies are retrieved and maintained.eslintrc.json: For the purpose of upholding code quality and adherence to coding standards, this secret configuration file outlines the ESLint rules and parameters.
package.json: This document specifies project dependencies and contains project metadata.

  Files' Description
Each file is described in full below:
make-multi-filter.js: The MakeMultiFilter method, which enables dynamic filtering of arrays, is implemented in this code. It outlines the reasoning behind developing filter functions and using them on arrays.
template-processor.js: This file defines the TemplateProcessor class, which is used to insert values into template strings from a dictionary object that is supplied. The constructor and fillIn methods are included.
This file, test-project2.js, is used as the test script to assess the performance of the implementations of MakeMultiFilter and TemplateProcessor. Additionally, changes to stop global namespace pollution are included.
This HTML document, test-project2.html, offers a graphical user interface for executing the tests specified in test-project2.js within a web browser. The test results are shown. node_modules/: External dependencies needed for the project are located in this directory, notably ESLint. This secret configuration file defines ESLint settings and rules for upholding coding standards and preserving code quality.
package.json: This file contains project metadata, including the name, version, and dependencies. Npm makes use of it to control project dependencies.

Relations Among Files
The following table outlines the connections between the project's files:
The implementation files for the Multi Filter Function and Template Processor are make-multi-filter.js and template-processor.js, respectively.
A test script called test-project2.js is used to check both the functioning of make-multi-filter.js and template-processor.js. It contains changes to stop pollution of the global namespace.
An HTML page called test-project2.html acts as a test runner to run the tests specified in test-project2.js in a web browser. It shows the user the test results.
.eslintrc.json is a configuration file used by ESLint to specify code quality standards and parameters for the project, and it is located in the node_modules/ directory.
Package.json contains project metadata and information about dependencies, making npm's dependency management easier.
The interaction between the files mostly occurs between the implementation files (make-multi-filter.js and template-processor.js) and the test script (test-project2.js). The user-friendly interface for running the tests is provided by the HTML test runner (test-project2.html). The node_modules directory is used to handle external dependencies, and the.eslintrc.json file specifies the ESLint settings.

3.  Project Specifications
   The three primary issues listed in the project specs must be resolved. The specifics of each issue are as follows:

-  Create a multi-filter function is the first issue
You must construct a JavaScript function called MakeMultiFilter in this exercise. It accepts an array (originalArray) as an argument and produces a function (arrayFilterer) that can be used to dynamically filter the array's components. Internally, the arrayFilterer function should maintain track of a concept called currentArray, which ought to be initially initialized to be the same as originalArray. There should be two functions sent as arguments to the arrayFilterer function:
This function, filterCriteria, accepts an array element as an argument and outputs a boolean. Every member of currentArray receives a call to the filterCriteria function, and currentArray should be changed to reflect the function's findings. If an element from filterCriteria returns false, currentArray should be cleared of that element. If not, it ought to be kept in currentArray. The function that is returned (arrayFilterer) should immediately return the value of currentArray with no filtering applied if filterCriteria is not a function.
callback: When the filtering is finished, this function will be invoked. The value of currentArray is sent as an input to the callback function. When referencing this within the callback function, originalArray's value should be used. Callback should be disregarded if it's not a function. The return result of the callback function is null. Unless the filterCriteria option is not supplied, in which case the currentArray should be returned, the arrayFilterer method should return itself. Multiple arrayFilterer functions must be able to operate simultaneously.
-  Problem 2: Template Processor
You must construct a JavaScript class called TemplateProcessor in order to solve difficulty number two. This class should have a fillIn function and be built using a string argument template. The fillIn function should return a string with the template filled in with values from the dictionary object when it is called with a dictionary object as an input. Implementing the TemplateProcessor class should make use of the prototype structure and common constructor in JavaScript.
Any text of the type "property" that appears in the template string should have the corresponding property of the dictionary object supplied to the function via the fillIn method, which should return the template string. The property should be replaced with an empty string if the template specifies a property that isn't specified in the dictionary object. Extra whitespace may arise if the property is sandwiched between two words, but this is okay. The only correctly formatted properties that the system must handle.
-  Fix test-project2.js to stop polluting the global namespace, which is issue 3
Description: In this situation, you need to alter the test-project2.js script to prevent it from polluting the global JavaScript namespace. Scripted symbols shouldn't be made into global variables. The symbols are to be contained and kept from being made visible in the global namespace.
The issue may be resolved by encapsulating the symbols specified in test-project2.js using an anonymous function or a module pattern. With this version, the script's symbols are made sure that they don't conflict with or become available from other JavaScript files.
The major goal is to keep test-project2.js's functionality and testing capabilities while maintaining a tidy and segregated global namespace.
These are the requirements for each project problem. The resolution of all three issues will result in a JavaScript project that is appropriately implemented and completely operational.

4. Setup and Usage
Prerequisites
Before setting up and using the project, ensure that you have the following prerequisites in place:
Node.js and npm: You should have Node.js and npm (Node Package Manager) installed on your system. You can download and install Node.js from the official website: Node.js Downloads. npm is included with Node.js, so there's no need to install it separately.
Install Dependencies: Use npm to install the project dependencies, such as ESLint, in the project directory. This will download and install the necessary packages into a directory called node_modules.
install -npm
Check the configuration of ESLint: Make sure the project directory has the ESLint configuration file (.eslintrc.json). This option will be used by ESLint for code quality checks.
Usage
The make-multi-filter.js, template-processor.js, and test-project2.js files are the three primary components of the project. The project's usage and operation instructions are provided below:
Checking the code quality using ESLint
You may use ESLint to verify the quality and compliance of your code. Use the following command to launch ESLint:
run lint with the command "-npm"
The project directory's JavaScript files will be analyzed by this command, and any faults or warnings that are discovered will be shown.
Before continuing, it's crucial to make sure your code passes ESLint inspections.
Conducted the Tests
Make-Multi-Filter.js and Template-Processor.js are tested as part of the project using the test script test-project2.js. There are two ways to conduct the tests:
In a web browser:
Launch your web browser and click the test-project2.html file. The test runner is this HTML page.
The tests will be run by the browser when it loads the JavaScript code from test-project2.js.
View the test results in the developer console of the browser.
Remarkably, debugging is easier in the browser-based testing environment when developing.

5. Output Screenshots
This is the html file that shows all the problems are passed.
![image](https://github.com/phanikrd/SSDI_P2/assets/62932967/e17dc0c8-6f15-4366-87a0-ea6aecf7005a)
This is the terminal that executes npm install.
![image](https://github.com/phanikrd/SSDI_P2/assets/62932967/f830bf7b-9d03-4194-b99d-61efbe32f000)

6.  Testing 
Browser Compatibility- Information on the compatibility of the tested browsers such as chrome(recommended) or its chromium substitutes.
Validation- Information about utilizing web tools to validate HTML and CSS such as webstorm and chrome.

7.  Credits
Acknowledgments-
Neha Galla
Moulya Madamanchi
Sai Sushma Gurram
Phani Kiran Reddy Duggempudi
Saketh Reddy Vallamreddy
Phiny Francis Govathoti
Resources Used-
Webstorm
Chrome
Github VCS
Nodejs
