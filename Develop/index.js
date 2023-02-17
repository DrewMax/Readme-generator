// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
const util = require("util");

// TODO: Create an array of questions for user input
const questions = [{
                type: 'input',
                name: 'title',
                message: 'What is your title of your repository? (Required)',
                validate: nameInput => 
                {
                    if (nameInput) {
                        return true; 
                    } else {
                        console.log('Please enter your repository title!');
                        return false; 
                    }
                },
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter a description of your repository (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true; 
                    } else {
                        console.log('Please enter a description of the respository!');
                        return false; 
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmInstallation',
                message: 'Is there an installation process?',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Please list installation process',
                when: ({ confirmInstallation }) => {
                    if (confirmInstallation) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
                {
                    type: 'confirm',
                    name: 'confirmUsage',
                    message: 'Would you like to give instructions for using your application?',
                },
                {
                    type: 'input',
                    name: 'instrctions',
                    message: 'Please add instructions, Screencastify is advised!',
                    when: ({ confirmUsage }) => {
                        if (confirmUsage) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your email address? (Required)?',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("Please enter a valid email mofo!!")
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'about',
                    message: 'Provide some information about yourself:',
                    when: ({confirmAbout}) => confirmAbout
                }]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();